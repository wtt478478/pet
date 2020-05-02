import React, { Component } from 'react';
import { List, WhiteSpace, Button, DatePicker,Picker } from 'antd-mobile';

import Edit from '../data/edit'

const Item = List.Item;
const Brief = Item.Brief;

const gender = [
    {
      label:'，男',
      value:'男'
    },
    {
      label:'女',
      value:'女'
    },
  ];
  const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px',position:'relative',borderBottom:0 }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);


class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderValue:[],
            cityValue:[]
        }
    }
    onChangeGender=(gender )=>{
        this.setState({
            genderValue: gender,
          });
    }
    render() {
        
        let antdDistrict =[];
        let districtData = require('../../assets/location.json');
        Object.keys(districtData).forEach((index)=>{
            let itemLevel1 ={};
            let itemLevel2 ={};
            itemLevel1.value = districtData[index].code;
            itemLevel1.label = districtData[index].name;
            itemLevel1.children = [];
            let data = districtData[index].cities;
            Object.keys(data).forEach((index)=>{
                itemLevel2.value = data[index].code;
                itemLevel2.label = data[index].name;
                itemLevel2.children = [];
                let data2 = data[index].districts;
                let itemLevel3 ={};
                itemLevel3.children = [];
                Object.keys(data2).forEach((index)=>{
                    itemLevel3.value = index;
                    itemLevel3.label = data2[index];
                    itemLevel2.children.push(itemLevel3);
                    itemLevel3 ={};
                });
                itemLevel1.children.push(itemLevel2);
                itemLevel2 ={};
            });
            antdDistrict.push(itemLevel1)
        });
        return (
            <div >
                <WhiteSpace size="lg" />
                <List className="my-list">
                    <Item extra="" arrow="horizontal" onClick={() => { }}>修改头像</Item>
                    <Item extra="小白" arrow="horizontal" onClick={() => { }}>昵称</Item>
                    <Picker
                        data={gender}
                        value={this.state.genderValue}
                        onChange={this.onChangeGender}
                    >
                        <List.Item arrow="horizontal">性别</List.Item>
                    </Picker>
                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra="Optional"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">年龄</List.Item>
                    </DatePicker>
                    <DatePicker
                    title="选择地区"
                    extra="请选择(可选)"
                    data={antdDistrict}
                    value={this.state.pickerValue}
                    onChange={v => this.setState({ cityValue: v })}
                    onOk={v => this.setState({ cityValue: v })}
                    onClick={()=>{console.log('xx')}}
                    >
                        <List.Item arrow="horizontal">城市</List.Item>
                    </DatePicker>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>个人说明</Item>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>情感状态</Item>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>职业</Item>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>常出没地</Item>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>兴趣爱好</Item>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>喜欢的宠物</Item>
                    <Item extra="" arrow="horizontal" onClick={() => { }}>养宠年限</Item>
                </List>

            </div>
        );
    }
}

export default Avatar;