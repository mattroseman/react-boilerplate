import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';

import App from '../client/components/App.js';

const app = express();

// PRERENDER REACT HOME PAGE
let prerenderedHTML;
const statsFile = path.resolve('dist/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });
const html = ReactDOMServer.renderToString(extractor.collectChunks(<App />));
const scriptTags = extractor.getScriptTags();
const styleTags = extractor.getStyleTags();
fs.readFile('public/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(`Something went wrong reading index.html:\n${err}`);
  }

  prerenderedHTML = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`)
    .replace(/<\/head>/, `${scriptTags}</head>`)
    .replace(/<\/head>/, `${styleTags}</head>`);
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
