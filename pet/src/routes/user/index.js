import React, { Component } from 'react';
import { Flex, Icon, WhiteSpace,  Button, List } from 'antd-mobile';
import { Link } from 'dva/router'
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css'
import Avatar from '../../components/Avatar'

import { connect } from 'dva'

const Item = List.Item;


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            userInfo: {}
        }
    }
    loadList = () => {
        this.props.dispatch({
            type: 'user/userInfo',
            payload: this.state.userId,
            callback: (res) => {
                this.setState({
                    userInfo: res
                })
            }
        });

    }
    showGender = (value) => {
        if (value) {
            if (value.sex === "女") {
                return `anticon_pet anticongender-female`;
            } else if (value.sex === "男") {
                return `anticon_pet anticongender-male`;
            }
        }
    }
    componentDidMount() {
        this.loadList();
    }

    render() {
        return (
            <div className="pet-user">

                { /** 个人主页 */}
                <Link to={
                    {
                        pathname: `/index/userData`,
                        state: this.state.userInfo
                    }
                }>>
                    <Flex className="homePage pet-padding bc-white" justify="between">
                        <div>
                            <Flex>
                                <Avatar src="../images/avatar.jpg" width="18vw"></Avatar>
                                <div style={{ marginLeft: '3vw' }}>
                                    <div>
                                        <span style={{ marginRight: '1vw', fontSize: '4.5vw' }}>{this.state.userInfo ? this.state.userInfo.username : ''}</span>
                                        <span><i style={{ color: 'pink' }} className={this.showGender(this.state.userInfo)}></i></span>
                                    </div>
                                    <WhiteSpace size="sm" />
                                    <div>
                                        手机号:<span style={{ marginLeft: '3vw' }}>{this.state.userInfo ? this.state.userInfo.tel : ''}</span>
                                    </div>
                                </div>
                            </Flex>
                        </div>
                        <div>
                            <span >个人资料 <Icon style={{ verticalAlign: 'middle' }} type="right"></Icon></span>
                        </div>
                    </Flex>
                </Link>
                <WhiteSpace size="lg" />

                { /** 日常管理 */}
                <div className="pet-user-list daily  bc-white">
                    <div className="title">日常管理</div>
                    <div className="divider-line"></div>
                    <List className="my-list">
                        <Link to="/index/mypet">
                            <Item extra="" arrow="horizontal" onClick={() => { }}>我的萌宠</Item>
                        </Link>
                        <Link to={{
                            pathname:"/index/mydynamic",
                            state:this.state.userInfo
                        }}>
                            <Item extra="" arrow="horizontal" onClick={() => { }}>我的动态</Item>
                        </Link>
                        <Link to="/index/myfollow">
                            <Item extra="" arrow="horizontal" onClick={() => { }}>我的关注</Item>
                        </Link>
                        <Link to="/index/myfans">
                            <Item extra="" arrow="horizontal" onClick={() => { }}>我的粉丝</Item>
                        </Link>
                    </List>

                </div>

                <WhiteSpace size="lg" />



                <WhiteSpace size="lg" />

                { /** 退出登录 */}
                <Button type="warning">退出登录</Button>

                <WhiteSpace size="lg" />


            </div>
        );
    }
}

export default connect((user) => ({ user }))(User);