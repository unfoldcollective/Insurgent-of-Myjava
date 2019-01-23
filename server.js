const express = require('express');
const next = require('next');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/data', async (req, res) => {
    try {
      const data = await readFile(
        path.join(__dirname, 'data/content.yml'),
        'utf-8'
      );
      return res.json(yaml.safeLoad(data));
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  server.get('/finish', (req, res) => {
    return res.redirect('/');
  });

  server.get('/finish/:id', (req, res) => {
    const id = req.params.id;
    if (!id) return res.redirect(301, '/');

    return app.render(req, res, '/finish', { id: req.params.id });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    process.stdout.write(`🤖  > Ready on http://localhost:${port} \n`);
  });
});
