const fs = require('fs');
const path = require('path');
const { ObjectID } = require('mongodb');
const puppeteer = require('puppeteer');
const jimp = require('jimp');
const nodemailer = require('nodemailer');
const yaml = require('js-yaml');
const snarkdown = require('snarkdown');

const { promisify } = require('util');
const readFile = promisify(fs.readFile);

module.exports = (server, db) => {
  const storage = db.collection('storage');

  /**
   * {
   *  name: Insurgent name,
   *  email: visitor@email,
   *  insurgent: {[app data]},
   *  finished: false
   * }
   */

  /**
   * List  Insurgents
   */
  server.get('/api', async (req, res) => {
    try {
      const offset = Number(req.query.offset) || 0;
      const n = Math.min(req.query.n || 20, 200);

      const data = await storage
        .find({ finished: true })
        .sort({ _id: -1 })
        .skip(offset)
        .limit(n)
        .toArray();

      return res.send({
        error: false,
        n,
        offset: offset,
        count: await storage.count(),
        data
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  /**
   * Post Insurgent
   */
  server.post('/api', async (req, res) => {
    try {
      const data = req.body;
      const payload = await storage.insertOne(data);

      return res.json({
        id: data._id,
        payload
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  server.post('/prepare', async (req, res) => {
    try {
      const data = req.body;
      const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';

      const payload = await storage.updateOne(
        { _id: new ObjectID(data.id) },
        {
          $set: {
            name: data.name,
            email: data.email,
            bg: data.bg,
            finished: true
          }
        }
      );

      //Generate screenshot
      const shotPath = `/shots/${data.id}.jpg`;

      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      await page.goto(`${baseUrl}/shot/${data.id}`);
      await page.screenshot({ path: shotPath });

      await browser.close();

      //Generate thumb
      const shot = await jimp.read(shotPath);
      await shot
        .clone()
        .resize(400, jimp.AUTO)
        .write(`/shots/${data.id}_thumb.jpg`);

      //Send email
      if (data.email) {
        const emailData = await readFile(
          path.join(__dirname, 'data/email.yml'),
          'utf-8'
        );

        const emailStrings = yaml.safeLoad(emailData);

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASS
          }
        });

        const emailContent = emailStrings.email.body
          .replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br>')
          .replace('_NAME_', data.name ? `, ${data.name}, ` : ' ')
          .replace('_URL_', 'PENDING URL');

        console.log(snarkdown(emailContent));

        const mailOptions = {
          from: `"${emailStrings.email.from}" <${process.env.GMAIL_ADDRESS}>`,
          to: data.email,
          subject: emailStrings.email.subject,
          html: snarkdown(emailContent)
        };

        transporter.sendMail(mailOptions);
      }

      return res.json({
        id: data._id,
        payload
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  /**
   * Get Insurgent
   */
  server.get('/api/:id', async (req, res) => {
    try {
      const id = req.params.id;

      const data = await storage.findOne({ _id: new ObjectID(id) });
      if (!data) {
        return res.status(404).json({ error: 'Not found' });
      }

      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
};
