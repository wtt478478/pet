import React, { Component } from 'react';
import NavComponent from '../../components/NavComponent';
import { Icon, List, Flex } from 'antd-mobile';
import {Link} from 'dva/router'

import { connect } from 'dva'
import Avatar from '../../components/Avatar';

const url = 'http://localhost:3000'


const Item = List.Item;

class MyFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            followList: [],
            followMsg: []
        }
    }
    // 返回上一页
    goBack = () => {
        this.props.history.replace('/index')
    }

    //获取动态列表
    loadList() {
        // 获取用户关注列表
        this.props.dispatch({
            type: 'user/userFollow',
            payload: this.state.userId,
            callback: (data) => {
                this.setState({
                    followList: data
                })
                let fansArr = [];
                data.map((item) => {
                    this.props.dispatch({
                        type: 'user/userInfo',
                        payload: item.follow_id,
                        callback: (res) => {
                            fansArr.push(res);
                            this.setState({
                                followMsg: fansArr
                            })
                        }
                    })

                })
            }
        })

    }

    componentDidMount() {
        this.loadList();
    }

    render() {
        console.log(this.state.followMsg)
        return (
            <div>
                <NavComponent navkey="myfollow" navLeftContent={[<Icon type="left" />]} navGoBack={this.goBack} navTitle="我的宠友"></NavComponent>
                <List>
                    {
                        this.state.followMsg.map((item, index) => {
                            return (
                                <Item key={index}>
                                    <Link to={
                                        {
                                            pathname: `/index/userData`,
                                            state: item
                                        }
                                    }>
                                        <Flex>
                                            <Avatar src={item ? url + item.avatar : '../images/avatar.jpg'} width="10vw" />
                                            <div style={{ marginLeft: '2vw' }}>{item ? item.username : ''}</div>
                                        </Flex>
                                    </Link>
                                </Item>
                            )
                        })
                    }
                </List>
            </div>
        );
    }
}

export default connect((user) => ({ user }))(MyFriends);