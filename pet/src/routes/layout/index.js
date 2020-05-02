import React, { Component } from 'react';
import { connect } from 'dva';
<<<<<<< HEAD
import { TabBar, SearchBar, Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import { Link } from 'dva/router'
=======
import { TabBar, SearchBar } from 'antd-mobile';
import PropTypes from 'prop-types';
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96

import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css';

import User from "../user/index";
import PetCare from "../petCare/index";
import Community from "../community/index";
<<<<<<< HEAD
// import Mall from "../mall/index";
=======
import Mall from "../mall/index";
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
import NavComponent from "../../components/NavComponent";



class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'communityTab',
      hidden: false,
      fullScreen: false,
<<<<<<< HEAD
      navkey: 'community',
      leftContent: [],
      rightContent: [<a style={{color:'#fff'}} onClick={this.releaseHandle}><i key="0" className="anticon_pet anticonxiangji"></i></a>],
      navTitle: '动态'
    };
  }
  // 返回上一页
  goBack = () => {
    console.log('goback');
  }
  // 发布动态
  releaseHandle = () => {
    console.log(1)
    this.props.history.push('/index/addDynamic')
  }
  // 渲染内容
=======
      navkey:'community',
      leftContent: [],
      rightContent: [<i key="0" className="anticon_pet anticonxiangji"></i>],
      navTitle: '动态'
    };
  }

  goBack = () => {
    console.log('goback');
  }

>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
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
      <div className="layout">
        <NavComponent
          navGoBack={this.goBack}
          navkey={this.state.navkey}
          navLeftContent={this.state.leftContent}
          navRightContent={this.state.rightContent}
          navTitle={this.state.navTitle}
        />

<<<<<<< HEAD
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 'calc(100vh - 45px)', zIndex: 9 }}>
=======
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 'calc(100vh - 45px)' }}>
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96


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
              selected={this.state.selectedTab === 'communityTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'communityTab',
<<<<<<< HEAD
                  navkey: 'community',
                  leftContent: [],
                  rightContent: [<a style={{color:'#fff'}}  onClick={this.releaseHandle}><i key="0" className="anticon_pet anticonxiangji"></i></a>],
                  navTitle: '动态'
                });
                // this.props.history.push('/index/community');
=======
                  navkey:'community',
                  leftContent: [],
                  rightContent: [<i key="0" className="anticon_pet anticonxiangji"></i>],
                  navTitle: '动态'
                })
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
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
              selected={this.state.selectedTab === 'petCareTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'petCareTab',
<<<<<<< HEAD
                  navkey: 'petCare',
                  leftContent: [],
                  rightContent: [],
                  navTitle: '宠物知识'
                });
                // this.props.history.push('/index/petCare');
=======
                  navkey:'petCare',
                  leftContent: [],
                  rightContent: [],
                  navTitle: '宠物知识'
                })
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
              }}
              data-seed="logId1"
            >
              {this.renderContent('petCare')}
            </TabBar.Item>
<<<<<<< HEAD
            {/* <TabBar.Item
=======
            <TabBar.Item
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
              icon={<i className="anticon_pet anticoncart" style={{ fontSize: '6vw' }}></i>}

              selectedIcon={<i className="anticon_pet anticoncart" style={{ fontSize: '6vw', color: '#f04d3c' }}></i>}

              title="商城"
              key="mall"
              selected={this.state.selectedTab === 'mallTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mallTab',
                  navkey:'mall',
                  leftContent: [
                    <div key="0" style={{ textAlign: 'center' }}>
                      <i style={{ fontSize: "5vw" }} className="anticon_pet anticonfenlei" />
                      <div style={{ fontSize: "2vw" }}>分类</div>
                    </div>
                  ],
                  rightContent: [
                    <div key="0" style={{ textAlign: 'center' }}>
                      <i key="0" style={{ fontSize: "5vw" }} className="anticon_pet anticonxiaoxi" />
                      <div style={{ fontSize: "2vw" }}>消息</div>
                    </div>
                  ],
                  navTitle: [<SearchBar key="mall" style={{ width: "100%"}} placeholder="搜索" maxLength={16} />]
                })
              }}
            >
              {this.renderContent('mall')}
<<<<<<< HEAD
            </TabBar.Item>*/}
=======
            </TabBar.Item>
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
            <TabBar.Item
              icon={<i className="anticon_pet anticoniconfinder_rabbit-animal-pet-wild-domestic_" style={{ fontSize: '6vw' }}></i>}

              selectedIcon={<i className="anticon_pet anticoniconfinder_rabbit-animal-pet-wild-domestic_" style={{ fontSize: '6vw', color: '#f04d3c' }}></i>}

              title="个人中心"
              key="user"
              selected={this.state.selectedTab === 'userTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'userTab',
<<<<<<< HEAD
                  navkey: 'user',
=======
                  navkey:'user',
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
                  leftContent: [
                    <i key="0" className="anticon_pet anticonerweima"></i>
                  ],
                  rightContent: [
                    <i key="1" className="anticon_pet anticonfriendaddfill" ></i>
                  ],
                  navTitle: '个人中心'
<<<<<<< HEAD
                });
                // this.props.history.push('/index/user');
=======
                })
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
              }}
            >
              {this.renderContent('user')}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}


export default connect((layout) => ({ layout }))(Layout);
