import React, { Component } from 'react';
import { List, WhiteSpace, Button, DatePicker, Picker, Icon, Modal } from 'antd-mobile';

import NavComponent from "../../components/NavComponent";
import Avatar from '../../components/Avatar'

import { connect } from 'dva'

const Item = List.Item;
const prompt = Modal.prompt;
const alert = Modal.alert;

const gender = [
    {
        label: 'GG',
        value: 'GG'
    },
    {
        label: 'MM',
        value: 'MM'
    },
];


const url = 'http://localhost:3000';


class PetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            petMsg: {},
        }
    }

    // 选择性别
    // 返回上一页
    goBack = () => {
        this.props.history.replace('/index')
    }

    //   更新资料
    updateHandle = () => {
        this.props.dispatch({
            type: 'pet/updateInfo',
            payload: this.state.petMsg
        })
    }

    componentDidMount() {
        let detail = this.props.location.state;
        this.setState({
            petMsg: detail
        })
        // this.loadList(id);
    }
    render() {

        return (
            <div >
                <NavComponent
                    navGoBack={this.goBack}
                    navkey="petdata"
                    navLeftContent={[<Icon type="left" />]}
                    navTitle="宠物信息"
                />
                <List className="my-list">
                    <Item className="userData-avatar" extra={[<Avatar src={this.state.petMsg ? url + this.state.petMsg.pet_avatar : `../images/avatar.jpg`} width="12vw"></Avatar>]} arrow="horizontal"
                        onClick={() => { }}>修改头像</Item>
                    <Item extra={this.state.petMsg ? this.state.petMsg.pet_name : ''} arrow="horizontal"
                        onClick={() => prompt('修改宠物名称', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.petMsg, { pet_name: value })
                                    this.setState({
                                        petMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.petMsg.pet_name}`)}
                    >宠物名称</Item>
                    <Picker
                        data={gender}
                        value={[this.state.petMsg ? this.state.petMsg.pet_sex : '']}
                        onChange={gender => {
                            console.log(gender[0])
                            let data = Object.assign({}, this.state.petMsg, { pet_sex: gender[0] })
                            this.setState({
                                petMsg: data
                            })
                        }}
                    >
                        <List.Item arrow="horizontal">宠物性别</List.Item>
                    </Picker>
                    <DatePicker
                        mode="date"
                        extra={this.state.petMsg ? this.state.petMsg.pet_birth : ''}
                        value={this.state.date}
                        onChange={date => {
                            this.setState({ date });
                            let data = Object.assign({}, this.state.petMsg, { pet_birth: date })
                            this.setState({
                                petMsg: data
                            })
                        }}
                    >
                        <List.Item arrow="horizontal">宠物生日</List.Item>
                    </DatePicker>
                    <Item extra={this.state.petMsg ? this.state.petMsg.pet_company_time : ''} arrow="horizontal"
                        onClick={() => prompt('编辑陪伴时间', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.petMsg, { pet_company_time: value })
                                    this.setState({
                                        petMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.petMsg.pet_company_time}`)}
                    >陪伴时间</Item>
                    <Item extra={this.state.petMsg ? this.state.petMsg.pet_varieties_id : ''} arrow="horizontal" onClick={() => { }}>宠物种类</Item>
                    <Item extra={this.state.petMsg ? this.state.petMsg.pet_weight + 'kg' : ''} arrow="horizontal"
                        onClick={() => prompt('编辑宠物体重', '', [
                            { text: '取消' },
                            {
                                text: '确定', onPress: value => {
                                    let data = Object.assign({}, this.state.petMsg, { pet_weight: value })
                                    this.setState({
                                        petMsg: data
                                    })
                                }
                            },
                        ], 'default', `${this.state.petMsg.pet_weight}`)}
                    >宠物体重</Item>
                </List>
                <WhiteSpace size="lg" />
                <Button onClick={this.updateHandle} type="warning">保存资料</Button>
                <Button onClick={() =>
                    alert('警告', '是否删除该宠物', [
                        { text: '取消', onPress: () => console.log('取消删除') },
                        {
                            text: '确定', onPress: () => {
                                this.props.dispatch({
                                    type: 'pet/deletePets',
                                    payload: {id:this.state.petMsg.id}
                                })
                            }
                        },
                    ])} >删除宠物</Button>
            </div >
        );
    }
}

export default connect((pet) => ({ pet }))(PetData);