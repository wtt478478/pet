import React, { Component } from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';

import 'antd-mobile/dist/antd-mobile.css';
import '../utils/iconfont/iconfont';
import './index.css';

import Login from './login_register/login/index';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Login></Login>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
