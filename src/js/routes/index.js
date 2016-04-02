import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../containers/app';
import Main from '../containers/main';
import Feed from '../containers/feed';
import Login from '../containers/login';
import MenuAndSettings from '../containers/menuAndSettings';
import GraphicNovel from '../containers/graphicNovel';
import Longform from '../containers/longform';



function getRouter(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="main" component={Main} />
      <Route path="feed" component={Feed} />
      <Route path="login" component={Login} />
      <Route path="menuAndSettings" component={MenuAndSettings} />
      <Route path="graphicNovel" component={GraphicNovel} />
      <Route path="longform" component={Longform} />
    </Router>
  );
}

export default getRouter;
