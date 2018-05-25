'use strict';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from '../common/App';

function run() {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );

  if (module.hot) {
    module.hot.accept('../common/App', () => {
      render(
        <AppContainer>
          <App />
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
