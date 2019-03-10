const express = require('express');
const app = express();
const port = parseInt(process.env.PORT, 10) || 3001;

const html = name => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Insurgent of Myjava</title>
  <style>
    body {
      margin:0;
      width: 100vw;
      height: 100vh;
      background-image: url('/shots/${name}.jpg');
      background-repeat: no-repeat;
      background-position: center center;
    }
  </style>
</head>
<body>
</body>
</html>
`;

app.use('/shots', express.static('/shots'));
app.get('/:id', (req, res) => res.send(html(req.params.id)));
app.listen(port, () =>
  process.stdout.write(`🤖  > Public app ready on http://localhost:${port} \n`)
);
