import React, { Component } from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';

import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css';

import User from "../user/index";
import PetCare from "../petCare/index";
import Community from "../community/index";
import Mall from "../mall/index";



class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'greenTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    switch (pageText) {
      case 'community':
        return (
          <div>
            <div>
              <Community></Community>
            </div>
          </div>
        );
        break;
      case 'petCare':
        return (
          <div>
            <div>
              <PetCare></PetCare>
            </div>
          </div>
        );
        break;
      case 'mall':
        return (
          <div>
            <div>
              <Mall></Mall>
            </div>
          </div>
        );
        break;
      case 'user':
        return (
          <div>
            <div>
              <User></User>
            </div>
          </div>
        );
        break;
      default: break;
    }

  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#f04d3c"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="社区"
            key="community"
            icon={<i className="anticon_pet anticonhome1" style={{ fontSize: '6vw' }}></i>}

            selectedIcon={<i className="anticon_pet anticonhome1" style={{ fontSize: '6vw', color: '#f04d3c' }}></i>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('community')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="anticon_pet anticonsmart-alerts" style={{ fontSize: '6vw' }}></i>}

            selectedIcon={<i className="anticon_pet anticonsmart-alerts" style={{ fontSize: '6vw', color: '#f04d3c' }}></i>}
            title="养宠"
            key="petCare"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('petCare')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="anticon_pet anticoncart" style={{ fontSize: '6vw' }}></i>}

            selectedIcon={<i className="anticon_pet anticoncart" style={{ fontSize: '6vw', color: '#f04d3c' }}></i>}

            title="商城"
            key="mall"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('mall')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="anticon_pet anticoniconfinder_rabbit-animal-pet-wild-domestic_" style={{ fontSize: '6vw' }}></i>}

            selectedIcon={<i className="anticon_pet anticoniconfinder_rabbit-animal-pet-wild-domestic_" style={{ fontSize: '6vw', color: '#f04d3c' }}></i>}

            title="个人中心"
            key="user"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('user')}
          </TabBar.Item>
        </TabBar>

      </div >
    );
  }
}

Layout.propTypes = {
};

export default connect()(Layout);
