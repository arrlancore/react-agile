'use strict';
import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from '../common/App';
import Contact from '../common/pages/contact';

function run() {
  hydrate(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root'),
  );

  if (module.hot) {
    module.hot.accept('../common/App', () => {
      hydrate(
        <AppContainer>
          <BrowserRouter>
            <App />
            <Switch>
              <Route path="/contact" component={Contact} />
            </Switch>
          </BrowserRouter>
        </AppContainer>,
        document.getElementById('root'),
      );
    });
  }
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
