'use strict';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { renderRoutes } from 'react-router-config';
import StaticRouter from 'react-router-dom/StaticRouter';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
import Html from '../common/Html';
import routes from '../common/Routes';
import stats from '../dist/react-loadable.json';

const getHead = async () => {
  const head = await Helmet.rewind();
  const sheet = new ServerStyleSheet();
  const styles = await sheet.getStyleTags(); // <-- getting all the tags from the sheet
  return { styles, head };
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
  let context = {};
  let modules = [];
  const content = renderToString(
    <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        {/* <Fragment> */}
        {renderRoutes(routes)}
        {/* <Home /> */}
        {/* </Fragment> */}
      </StaticRouter>
    </Loadable.Capture>,
  );
  getHead().then((headAttr) => {
    let bundles = getBundles(stats, modules);
    res.send(
      Html(content, headAttr.styles, headAttr.head, bundles).replace(
        /(\r\n\t|\n|\r\t)/gm,
        '',
      ),
    );
  });
});

export default app;
