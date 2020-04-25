import React, { Component } from 'react';
import { List, WhiteSpace, Button, Picker, Icon, Modal,  } from 'antd-mobile';

import NavComponent from "../../components/NavComponent";
import Avatar from '../../components/Avatar'

import { connect } from 'dva'

const Item = List.Item;
const prompt = Modal.prompt;

const gender = [
    {
        label: '男',
        value: '男'
    },
    {
        label: '女',
        value: '女'
    },
];


const url = 'http://localhost:3000';



class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            userMsg: {
            },
        }
    }
    
    // 返回上一页
    goBack = () => {
        this.props.history.replace('/index')
    }

    //   更新资料
    updateHandle = () => {
        this.props.dispatch({
            type: 'user/updateInfo',
            payload: this.state.userMsg
        })
    }
    componentDidMount() {
        // this.loadList();
        let detail = this.props.location.state;
        this.setState({
            userMsg: detail
        })
    }
    render() {


        let antdDistrict = [];
        let districtData = require('../../assets/location.json');
        Object.keys(districtData).forEach((index) => {
            let itemLevel1 = {};
            let itemLevel2 = {};
            itemLevel1.value = districtData[index].code;
            itemLevel1.label = districtData[index].name;
            itemLevel1.children = [];
            let data = districtData[index].cities;
            Object.keys(data).forEach((index) => {
                itemLevel2.value = data[index].code;
                itemLevel2.label = data[index].name;
                itemLevel2.children = [];
                let data2 = data[index].districts;
                let itemLevel3 = {};
                itemLevel3.children = [];
                Object.keys(data2).forEach((index) => {
                    itemLevel3.value = index;
                    itemLevel3.label = data2[index];
                    itemLevel2.children.push(itemLevel3);
                    itemLevel3 = {};
                });
                itemLevel1.children.push(itemLevel2);
                itemLevel2 = {};
            });
            antdDistrict.push(itemLevel1)
        });
        return (
            <div >
                <NavComponent
                    navGoBack={this.goBack}
                    navkey="userdata"
                    navLeftContent={[<Icon type="left" />]}
                    navTitle="个人信息"
                />
                <List className="my-list">
                    <Item className="userData-avatar" extra={[<Avatar src={this.state.userMsg ? url + this.state.userMsg.avatar : `../images/avatar.jpg`} width="12vw"></Avatar>]} arrow="horizontal"
                        onClick={() => { }}>修改头像</Item>
                    <Item extra={this.state.userMsg ? this.state.userMsg.username : ''} arrow="horizontal"
                        onClick={() => prompt('修改用户名', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.userMsg, { username: value })
                                    this.setState({
                                        userMsg: data
                                    })
                                    console.log(this.state.userMsg)
                                }
                            },
                        ], 'default', `${this.state.userMsg.username}`)}
                    >昵称</Item>
                    <Picker
                        data={gender}
                        value={[this.state.userMsg ? this.state.userMsg.sex : '']}
                        onChange={gender => {
                            console.log(gender[0])
                            let data = Object.assign({}, this.state.userMsg, { sex: gender[0] })
                            this.setState({
                                userMsg: data
                            })
                        }}
                    >
                        <List.Item arrow="horizontal">性别</List.Item>
                    </Picker>
                    <Item extra={this.state.userMsg ? this.state.userMsg.age : ''} arrow="horizontal"
                        onClick={() => prompt('修改年龄', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.userMsg, { age: value })
                                    this.setState({
                                        userMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.userMsg.age}`)}
                    >年龄</Item>
                    <Picker
                        title="选择地区"
                        data={antdDistrict}
                        value={this.state.userMsg ? this.state.userMsg.city : ''}
                        onChange={v => {
                            let data = Object.assign({}, this.state.userMsg, { city: v })
                            this.setState({
                                userMsg: data
                            })
                        }}
                        onOk={v => {
                            let data = Object.assign({}, this.state.userMsg, { city: v })
                            this.setState({
                                userMsg: data
                            })
                        }}
                    >
                        <List.Item arrow="horizontal">城市</List.Item>
                    </Picker>
                    <Item extra={this.state.userMsg ? this.state.userMsg.user_job : ''} arrow="horizontal"
                        onClick={() => prompt('修改职业', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.userMsg, { user_job: value })
                                    this.setState({
                                        userMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.userMsg.user_job}`)}
                    >职业</Item>
                    <Item extra={this.state.userMsg ? this.state.userMsg.user_hobby : ''} arrow="horizontal"
                        onClick={() => prompt('编辑兴趣爱好', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.userMsg, { user_hobby: value })
                                    this.setState({
                                        userMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.userMsg.user_hobby}`)}
                    >兴趣爱好</Item>
                    <Item extra={this.state.userMsg ? this.state.userMsg.user_des : ''} arrow="horizontal"
                        onClick={() => prompt('填写个人说明', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.userMsg, { user_des: value })
                                    this.setState({
                                        userMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.userMsg.user_des}`)}
                    >描述</Item>
                    <Item extra={this.state.userMsg ? this.state.userMsg.user_lover_pet : ''} arrow="horizontal"
                        onClick={() => prompt('填写喜欢的宠物', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.userMsg, { user_lover_pet: value })
                                    this.setState({
                                        userMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.userMsg.user_lover_pet}`)}
                    >喜欢的宠物</Item>
                    <Item extra={this.state.userMsg ? this.state.userMsg.user_petCare_time : ''} arrow="horizontal"
                        onClick={() => prompt('修改养宠时间', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.userMsg, { user_petCare_time: value })
                                    this.setState({
                                        userMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.userMsg.user_petCare_time}`)}
                    >养宠年限</Item>
                </List>
                <WhiteSpace size="lg" />
                <Button onClick={this.updateHandle} type="warning">保存资料</Button>
            </div >
        );
    }
}

export default connect((user) => ({ user }))(UserData);