import React, { Component } from 'react';
import NavComponent from '../../components/NavComponent';
import { Icon, List, Flex, WhiteSpace, Button } from 'antd-mobile';
import { Link } from 'dva/router'
import './index.css'
import Avatar from '../../components/Avatar'

import { connect } from 'dva'

const url = 'http://localhost:3000'


class MyDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            dynamic: [],
            userInfo: {},
        }
    }
    // 返回上一页
    goBack = () => {
        this.props.history.replace('/index')
    }

    // 发布动态
    releaseHandle=()=>{

    }

    //计算时间
    lastTime = (time) => {
        let now = new Date();
        let reply_time = new Date(time);
        let timestamp = now - reply_time;
        let msec = parseInt(timestamp % 1000);
        let sec = parseInt(timestamp / 1000 % 60);
        let min = parseInt(timestamp / (1000 * 60) % 60);
        let hour = parseInt(timestamp / (1000 * 60 * 60) % 24);
        let day = parseInt(timestamp / (1000 * 60 * 60 * 24) % 30);
        // 月份有31天,30天
        let month = parseInt(timestamp / (1000 * 60 * 60 * 24 * 30) % 12);
        let year = parseInt(timestamp / (1000 * 60 * 60 * 24 * 365));
        if (year > 0) {
            return `${year}年前`;
        }
        if (month > 0) {
            return `${month}个月前`;
        }
        if (day > 0) {
            return `${day}天前`;
        }
        if (hour > 0) {
            return `${hour}小时前`;
        }
        if (min > 0) {
            return `${min}分钟前`;
        }
        if (sec > 0) {
            return `${sec}秒前`;
        }
        if (msec > 0) {
            return `${msec}毫秒前`;
        }
    }

    //获取动态列表
    loadList() {

        this.props.dispatch({
            type: 'user/userDynamicList',
            payload: this.state.userId,
            callback: (res) => {
                this.setState({
                    dynamic: res
                });
            }
        })
        this.props.dispatch({
            type: 'user/userInfo',
            payload: this.state.userId,
            callback: (res) => {
                this.setState({
                    userInfo: res
                })
            }
        })

    }

    componentDidMount() {
        this.loadList();
    }

    render() {
        console.log(this.state.dynamic)
        return (
            <div>
                <NavComponent navkey="mydynamic" navLeftContent={[<Icon type="left" />]} navGoBack={this.goBack} navTitle="我的动态"></NavComponent>
                <List>
                    {
                        this.state.dynamic.length ===0  ?
                            <div className="noDynamic bc-white">
                                <img src="../images/nodata.png" alt="nodata"></img>
                                <Button inline type="primary" onClick={this.releaseHandle}>发布动态</Button>
                            </div>
                            :
                            this.state.dynamic.map((item, index) => {
                                return (
                                    <div>
                                        <div key={index} className="dynamic-item pet-padding">
                                            <Link to={`/index/dynamicDetail?id=${item.id}`}>
                                                <div className="dynamic-header">
                                                    <Flex className="dynamic-userinfo" justify="between">
                                                        <Flex>
                                                            <Avatar src={this.state.userInfo ? url + this.state.userInfo.avatar : ''} width="12vw"></Avatar>
                                                            <div style={{ marginLeft: '3vw' }}>
                                                                <div style={{ marginRight: '1vw', fontSize: '4.5vw' }}>{this.state.userInfo ? this.state.userInfo.username : ''}</div>
                                                                <WhiteSpace size="sm" />
                                                                <div>{this.lastTime(item.dynamic_createtime)}</div>
                                                            </div>
                                                        </Flex>
                                                        {
                                                            item.user_id == this.state.userId ? '' : <Button className="attention"><i className="anticon_pet anticonadd1"></i> 关注</Button>
                                                        }
                                                    </Flex>
                                                </div>
                                                <div className="dynamic-body">
                                                    <div className="dynamic-new-text">
                                                        {item.dynamic_content}
                                                    </div>
                                                    <div className="dynamic-new-pictrue">
                                                        <Flex>
                                                            {
                                                                item.pictrues.split(',').map((item, i) => {
                                                                    return (
                                                                        <img src={url + item} alt="动态图片" />
                                                                    )
                                                                })
                                                            }

                                                        </Flex>
                                                    </div>
                                                </div>
                                                <div className="dynamic-footer">
                                                    <Flex justify="between">
                                                        <div>精选宠友</div>
                                                        <div className="dynamic-option">
                                                            <span style={{ marginRight: '2vw' }}><i className="anticon_pet anticonxihuan-dian"></i>{item.praise_number}</span>
                                                            <span><i className="anticon_pet anticonpinglun"></i>{item.comment_number}</span>
                                                        </div>
                                                    </Flex>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="divider-line "></div>
                                    </div>
                                )

                            })
                    }
                </List>
            </div>
        );
    }
}

export default connect((user) => ({ user }))(MyDynamic);