'use strict';
import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from '../common/App';
import routes from '../common/Routes';

const reducers = {};

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  applyMiddleware(thunk),
);

Loadable.preloadReady().then(() => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
});
if (module.hot) {
  Loadable.preloadReady().then(() => {
    module.hot.accept('../common/App', () => {
      hydrate(
        <AppContainer>
          <Provider store={store}>
            <BrowserRouter>
              {renderRoutes(routes)}
              <App />
            </BrowserRouter>
          </Provider>
        </AppContainer>,
        document.getElementById('root'),
      );
    });
  });
}
