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

  server.get('/api', async (req, res) => {
    try {
      const offset = Number(req.query.offset) || 0;
      const n = Math.min(req.query.n || 20, 200);

      const data = await storage
        .find()
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
      return res.status(500).json(error);
    }
  });

  server.post('/api', async (req, res) => {
    try {
      const data = req.body;
      const payload = await storage.insertOne(data);

      return res.json({
        id: data._id,
        payload
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
