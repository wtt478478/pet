import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Index from './routes/index';
import User from './routes/user/index';
import Community from './routes/community/index';
import Mall from './routes/mall/index';
import PetCare from './routes/petCare/index';
import Login from './routes/login_register/login/index';
import Register from './routes/login_register/register/index';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/user" exact component={User} />
        <Route path="/community" exact component={Community} />
        <Route path="/mall" exact component={Mall} />
        <Route path="/petCare" exact component={PetCare} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
