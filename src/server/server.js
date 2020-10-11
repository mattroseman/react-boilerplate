import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';

import App from '../client/components/App.js';

const app = express();

// PRERENDER REACT HOME PAGE
let prerenderedHTML;
const html = ReactDOMServer.renderToString(<App />);
fs.readFile('dist/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(`Something went wrong reading index.html:\n${err}`);
  }

  prerenderedHTML = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);
});

// SETUP PATHS
app.get('/', (req, res) => {
  res.send(prerenderedHTML);
});

// SETUP PUBLIC FILES
app.use(express.static(path.resolve('dist')));
app.use(express.static(path.resolve('public')));

// START APP
const port = process.env.PORT || 5000;
app.listen(port);
