'use strict';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
import Html from '../common/Html';
import Partner from '../common/pages/about/partner/index';

const head = Helmet.rewind();
const getStyle = async () => {
  const sheet = new ServerStyleSheet();
  const styles = await sheet.getStyleTags(); // <-- getting all the tags from the sheet
  return styles;
};
const app = express();
app.get('/api', (req, res) => {
  res.send({ message: 'I am a server route and can also be hot reloaded!' });
});

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  let application = renderToString(<Partner />);
  getStyle().then((style) => {
    res.send(Html(application, style, head).replace(/(\r\n\t|\n|\r\t)/gm, ''));
  });
});

export default app;
