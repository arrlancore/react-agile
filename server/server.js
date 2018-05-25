'use strict';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
import Html from '../common/Html';
import PartnerHead from '../common/pages/about/partner/head';
import Partner from '../common/pages/about/partner/index';

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
  getStyle().then((data) => {
    res.send(
      Html(application, data, PartnerHead).replace(/(\r\n\t|\n|\r\t)/gm, ''),
    );
  });
});

export default app;
