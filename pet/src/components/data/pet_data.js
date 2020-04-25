import React, { Component } from 'react';
import { List, WhiteSpace, Button, DatePicker, Picker, Icon } from 'antd-mobile';

import '../style.css'

import Edit from '../data/edit'
import NavComponent from '../NavComponent'
import Avatar from '../Avatar'

const Item = List.Item;
const Brief = Item.Brief;

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

class petData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderValue: [],
        }
    }
    onChangeGender = (gender) => {
        this.setState({
            genderValue: gender,
        });
    }
    goBack=()=>{
        console.log('go back');
    }
    render() {
        return (
            <div >
                <NavComponent
                 navGoBack={this.goBack} 
                 navkey="petdata"
                 navLeftContent={[<Icon type="left" />]}
                 navTitle="编辑资料"
                  />
                <WhiteSpace size="lg" />
                <List className="my-list">
                    <Item className="petData-avatar" extra={[<Avatar src="../images/avatar.jpg" width="14vw"></Avatar>]} arrow="horizontal" onClick={() => { }}>修改头像</Item>
                    <Item extra="小白" arrow="horizontal" onClick={() => { }}>宠物姓名</Item>
                    <Picker
                        data={gender}
                        value={this.state.genderValue}
                        onChange={this.onChangeGender}
                    >
                        <List.Item arrow="horizontal">宠物性别</List.Item>
                    </Picker>
                    <Item extra="其他品种" arrow="horizontal" onClick={() => { }}>宠物品种</Item>
                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra="请选择"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">宠物生日</List.Item>
                    </DatePicker>
                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra="请选择"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">陪伴时间</List.Item>
                    </DatePicker>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>宠物体重</Item>
                </List>
                <WhiteSpace size="lg" />
                <Button type="warning">删除宠物</Button>
            </div>
        );
    }
}

export default petData;