// import React from 'react';
// import Loadable from 'react-loadable';
// import { Route, Switch } from 'react-router-dom';
// import App from './App';

// const LazyRoute = (props) => {
//   const component = Loadable({
//     loader: props.component,
//     loading: () => <div>Loading&hellip;</div>,
//   });

//   return <Route {...props} component={component} />;
// };

// const Routes = () => (
//   <App>
//     <Switch>
//       <LazyRoute
//         exact
//         path="/"
//         component={() => import('./routes/Home/Home')}
//       />
//       <LazyRoute
//         exact
//         path="/about"
//         component={() => import('./routes/About/About')}
//       />
//       <LazyRoute
//         exact
//         path="/login"
//         component={() => import('./routes/Login/Login')}
//       />
//     </Switch>
//   </App>
// );

// export default Routes;
import React from 'react';
import AppRoot from './AppRoot';
import Home from './pages';
import Contact from './pages/contact';

// const LazyRoute = (data) => {
//   const component = Loadable({
//     loader: data,
//     loading: () => <div>Loading&hellip;</div>,
//   });
// };

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/contact',
        component: Contact,
      },
    ],
  },
];

export default routes;
