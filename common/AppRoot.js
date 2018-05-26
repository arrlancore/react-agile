import React from 'react';
import { renderRoutes } from 'react-router-config';
import Link from 'react-router-dom/Link';

const AppRoot = (props) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">React Universal App (SSR + SW)</span>
        <div className="mdl-layout-spacer" />
        <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="/">
            Home{' '}
          </Link>
          <Link className="mdl-navigation__link" to="/contact">
            {' '}
            contact{' '}
          </Link>
        </nav>
      </div>
    </header>
    <main className="mdl-layout__content">
      {renderRoutes(props.route.routes)}
    </main>
  </div>
);

export default AppRoot;
