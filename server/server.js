'use strict';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { matchRoutes, renderRoutes } from 'react-router-config';
import StaticRouter from 'react-router-dom/StaticRouter';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
import Html from '../common/Html';
import routes from '../common/Routes';
import reducers from '../common/modules';
import stats from '../dist/react-loadable.json';

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

const store = createStore(reducers, applyMiddleware(thunk));

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

  const getHead = async () => {
    const branch = matchRoutes(routes, req.url);
    const promises = await branch.map(({ route }) => {
      let fetchData = route.component.fetchData;
      let data =
        fetchData instanceof Function
          ? fetchData(store)
          : Promise.resolve(null);
    });
    const head = await Helmet.rewind();
    const sheet = new ServerStyleSheet();
    const styles = await sheet.getStyleTags(); // <-- getting all the tags from the sheet
    return { styles, head, promises };
  };

  const content = renderToString(
    <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Loadable.Capture>,
  );
  getHead().then((headAttr) => {
    console.log('headAttr: ', headAttr.promises);
    console.log('store.getState(): ', store.getState());
    let bundles = getBundles(stats, modules);
    res.send(Html(content, headAttr.styles, headAttr.head, bundles));
  });
});

export default app;

// .replace(
//   /(\r\n\t|\n|\r\t)/gm,
//   '',
// )
