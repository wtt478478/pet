import React, { Component } from 'react';
import { Flex, Icon, WhiteSpace, List, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../../utils/iconfont/iconfont.css'
import '../index.css'
import Avatar from '../../../components/Avatar'
import NavComponent from '../../../components/NavComponent'
import CommentText from '../../../components/commentText';

import { connect } from 'dva'

const Item = List.Item;
const url = 'http://localhost:3000'


class DynamicDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
            detailUser: [],
            comment: [],
            userInfo: [],
            userId: sessionStorage.id
        }
    }

    loadList = (id) => {
        this.props.dispatch({
            type: 'community/dynamicDetail',
            payload: id,
            callback: (res) => {
                res.pictrues = res.pictrues.split(',');
                this.setState({
                    detail: res
                })
                console.log(this.state.detail)
                this.props.dispatch({
                    type: 'user/userInfo',
                    payload: res.user_id,
                    callback: (userData) => {
                        this.setState({
                            detailUser: userData
                        })
                    }
                });
            }
        });
        this.props.dispatch({
            type: 'community/commentList',
            payload: id,
            callback: (res) => {
                this.setState({
                    comment: res
                });
                let userInfoArr = [];
                res.map((item) => {
                    this.props.dispatch({
                        type: 'user/userInfo',
                        payload: item.user_id,
                        callback: (data) => {
                            userInfoArr.push(data);
                            this.setState({
                                userInfo: userInfoArr
                            })
                        }
                    });
                })


            }
        });
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

    goback = () => {
        this.props.history.push('/index');
    }
    componentDidMount() {
        let id = this.props.location.search;
        id = id.slice(id.indexOf('=') + 1);
        this.loadList(id);
    }

    render() {
        return (
            <div className="">
                <NavComponent navLeftContent={[<Icon type="left"></Icon>]} navGoBack={this.goback} />
                <div className="dynamic-item pet-padding bc-white">
                    <div className="dynamic-header">
                        <Flex className="dynamic-userinfo" justify="between">
                            <Flex>
                                <Avatar src={url + this.state.detailUser.avatar} width="10vw"></Avatar>
                                <div style={{ marginLeft: '3vw' }}>
                                    <div style={{ marginRight: '1vw', fontSize: '4vw' }}>{this.state.detailUser.username}</div>
                                    <WhiteSpace size="sm" />
                                    <div style={{ fontSize: '3vw' }}>{this.lastTime(this.state.detail.dynamic_createtime)}</div>
                                </div>
                            </Flex>
                            {
                                this.state.detail.user_id == this.state.userId ? '' : <Button className="attention"><i className="anticon_pet anticonadd1"></i> 关注</Button>
                            }
                        </Flex>
                    </div>
                    <div className="dynamic-body">
                        <div className="dynamic-new-text">
                            {this.state.detail.dynamic_content}
                        </div>
                        <div className="dynamic-new-pictrue">
                            <Flex>
                                {
                                    this.state.detail.pictrues ?
                                        this.state.detail.pictrues.map((item) => {
                                            return (
                                                <img src={url + item} />
                                            )
                                        }) : ''

                                }
                            </Flex>
                        </div>
                    </div>
                    <div className="dynamic-footer">
                        <Flex justify="between">
                            <div>精选宠友</div>
                            <div className="dynamic-option">
                                <span style={{ marginRight: '2vw' }}><i className="anticon_pet anticonxihuan-dian"></i>133</span>
                                <span><i className="anticon_pet anticonpinglun"></i>6</span>
                            </div>
                        </Flex>
                    </div>
                </div>

                <WhiteSpace size="md" />

                {/**评论区 */}

                <div className="bc-white">
                    <Flex justify="between" className="pet-padding">
                        <span>评论</span>
                        <span>谁赞过</span>
                    </Flex>
                    <List className="my-list">
                        {
                            this.state.userInfo.map((item, index) => {
                                return (
                                    <Item key={index}>
                                        <Flex>
                                            <Avatar src={url + item.avatar} width="10vw"></Avatar>
                                            <div style={{ marginLeft: '3vw' }}>
                                                <div style={{ marginRight: '1vw', fontSize: '3vw', color: '#7D9EC0' }}>{item.username}</div>
                                                <WhiteSpace size="sm" />
                                                <div style={{ fontSize: '4vw' }}>{this.state.comment[index].content}</div>
                                            </div>
                                        </Flex>
                                        <div></div>
                                    </Item>
                                )
                            })
                        }

                    </List>
                    {/**添加评论 */}
                    <CommentText></CommentText>
                </div>

            </div>
        );
    }
}

export default connect((community, user) => ({ community, user }))(DynamicDetail);



