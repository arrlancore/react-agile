import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import App from './App';

const LazyRoute = (props) => {
  const component = Loadable({
    loader: props.component,
    loading: () => <div>Loading&hellip;</div>,
  });

  return <Route {...props} component={component} />;
};

const Routes = () => (
  <App>
    <Switch>
      <LazyRoute
        exact
        path="/"
        component={() => import('./routes/Home/Home')}
      />
      <LazyRoute
        exact
        path="/about"
        component={() => import('./routes/About/About')}
      />
      <LazyRoute
        exact
        path="/login"
        component={() => import('./routes/Login/Login')}
      />
    </Switch>
  </App>
);

export default Routes;
