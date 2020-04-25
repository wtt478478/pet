import React, { Component } from 'react';
import { Flex, WhiteSpace, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css'
import Avatar from '../../components/Avatar'
import { Link } from 'dva/router';
import SortBar from '../../components/sortBar'

import { connect } from 'dva'

const url = 'http://localhost:3000'

class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],      //原始数组
            listData: [],  //筛选之后的数组
            userInfo: [],
            userId: sessionStorage.id
        }
    }
    //获取动态列表
    loadList() {
        this.props.dispatch({
            type: 'community/loadList',
            callback: (res) => {
                let infoArr = [];
                if (res) {
                    res.map((item) => {
                        item.pictrues = item.pictrues.split(',');
                        item.dynamic_createtime = this.lastTime(item.dynamic_createtime);
                        // 获取用户信息
                        this.props.dispatch({
                            type: 'user/userInfo',
                            payload: item.user_id,
                            callback: (data) => {
                                infoArr.push(data);
                                this.setState({
                                    userInfo: infoArr
                                })
                            }
                        })
                    })
                    this.setState({
                        list: res,
                        listData: res
                    });
                }
            }
        })
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

    //筛选
    filterHandle = (id, tag) => {
        let filter = [];
        this.state.list.map((item) => {
            if (item.tag_id == id) {
                filter.push(item);
            }
            this.setState({
                listData: filter
            })
        })
    }

    componentDidMount() {
        this.loadList();

    }

    render() {
        return (
            <div className="community">
                <SortBar onTab={(id, tag) => this.filterHandle(id, tag)} ></SortBar>

                {/**动态分类 */}


                <WhiteSpace size="lg" />

                {/**动态 */}
                <div className="dynamic-list bc-white">
                    {
                        this.state.listData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="dynamic-item pet-padding">

                                        <div className="dynamic-header">
                                            <Flex className="dynamic-userinfo" justify="between">
                                                <Flex>
                                                    <Avatar src={this.state.userInfo[index] ? url + this.state.userInfo[index].avatar : ''} width="12vw"></Avatar>
                                                    <div style={{ marginLeft: '3vw' }}>
                                                        <div style={{ marginRight: '1vw', fontSize: '4.5vw' }}>{this.state.userInfo[index] ? this.state.userInfo[index].username : ''}</div>
                                                        <WhiteSpace size="sm" />
                                                        <div>{item.dynamic_createtime}</div>
                                                    </div>
                                                </Flex>
                                                {
                                                    item.user_id == this.state.userId ? '' : <Button className="attention"><i className="anticon_pet anticonadd1"></i> 关注</Button>
                                                }

                                            </Flex>
                                        </div>
                                        <div className="dynamic-body">
                                            <Link to={`/index/dynamicDetail?id=${item.id}`}>
                                                <div className="dynamic-new-text">
                                                    {item.dynamic_content}
                                                </div>
                                                <div className="dynamic-new-pictrue">
                                                    <Flex>
                                                        {
                                                            item.pictrues.map((item, i) => {
                                                                return (
                                                                    <img key={i} src={url + item} alt="主图" />
                                                                )
                                                            })
                                                        }

                                                    </Flex>
                                                </div>
                                            </Link>
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

                                    </div>
                                    <div className="divider-line "></div>
                                </div>
                            )



                        })
                    }

                </div>

                <WhiteSpace size="lg" />

            </div>

        );
    }
}

export default connect((community, user) => ({ community, user }))(Community);