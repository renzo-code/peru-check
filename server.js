require('dotenv').config();

const ReactDOMServer = require('react-dom/server');

const express = require('express');
const path = require('path');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
  const server = express();

  const staticPath = path.join(__dirname, '/public/static');

  server.use('/static', express.static(staticPath, {
    maxAge: '1y',
    immutable: true
  }));

  server.get('/favicon.ico', (req, res) => {
    res.sendFile(`${staticPath}/favicon.ico`);
  });

  server.get('/_next/*', (req, res) => handle(req, res));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`listening on port ${port} - podcast`);
  })
});