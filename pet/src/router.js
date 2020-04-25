import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import Index from './routes/index';
import Layout from './routes/layout/index'
import Login from './routes/login_register/login/index';
import Register from './routes/login_register/register/index';
import PetData from './components/data/pet_data'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/index" exact component={Layout} />
        <Route path="/index/petData" exact  component={PetData} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
