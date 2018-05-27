import React from 'react';
import { renderRoutes } from 'react-router-config';
import Link from 'react-router-dom/Link';

const AppRoot = (props) => (
  <div>
    <header>
      <div>
        <span>React Universal App (SSR + SW)</span>
        <nav>
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
    <main>{renderRoutes(props.route.routes)}</main>
  </div>
);

export default AppRoot;
