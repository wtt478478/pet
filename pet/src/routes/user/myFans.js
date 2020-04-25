import React, { Component } from 'react';
import NavComponent from '../../components/NavComponent';
import { Icon, List, Flex } from 'antd-mobile';

import { connect } from 'dva'
import Avatar from '../../components/Avatar';
import { Link } from 'dva/router';

const url = 'http://localhost:3000'


const Item = List.Item;

class MyFans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            fansList: [],
            fansMsg: []
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
            type: 'user/userFans',
            payload: this.state.userId,
            callback: (data) => {
                this.setState({
                    fansList: data
                })
                let fansArr = [];
                data.map((item) => {
                    this.props.dispatch({
                        type: 'user/userInfo',
                        payload: item.follower,
                        callback: (res) => {
                            fansArr.push(res);
                            this.setState({
                                fansMsg: fansArr
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
        return (
            <div>
                <NavComponent navkey="myfans" navLeftContent={[<Icon type="left" />]} navGoBack={this.goBack} navTitle="我的关注"></NavComponent>
                <List>
                    {
                        this.state.fansMsg.map((item, index) => {
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

export default connect((user) => ({ user }))(MyFans);