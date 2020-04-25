import React, { Component } from 'react';
import { List, WhiteSpace, Button, DatePicker, Picker, Icon, ImagePicker, InputItem } from 'antd-mobile';
import { connect } from 'dva'
import moment from 'moment'
import NavComponent from '../../../components/NavComponent'

import './index.css'

const Item = List.Item;

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


class AddPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet_sex: [],
            pet_name: '',
            pet_varieties_name: '',
            files: [{
                url: '../images/avatar.jpg',
                id: '1',
            }],
            addPet: {
                user_id: sessionStorage.id,
            },
            petCateAll: [],
            petCate: [],
        }
    }
    onChangeGender = (gender) => {
        let data = Object.assign({}, this.state.addPet, { pet_sex: gender })
        this.setState({
            pet_sex: gender,
            addPet: data
        })
    }
    goBack = () => {
        this.props.history.push('/index');
    }
    onImagChange = (files, type, index) => {
        let formData = new FormData();
        console.log(files, type, index);
        this.setState({
            files,
        });
        if (type == 'add') {
            let file = files[0].file;
            let img = {};
            img.type = file.type;
            img.name = file.name;
            img.size = file.size;
            img.url = files[0].url;

            let data = Object.assign({}, this.state.addPet, { pet_avatar: img })
            this.setState({
                addPet: data
            });
            this.props.dispatch({
                type: 'upload/uploadHandle',
                payload: this.state.addPet.pet_avatar,
                callback: (res) => {
                    let data = Object.assign({}, this.state.addPet, { pet_avatar: res })
                    this.setState({
                        addPet: data
                    });
                }
            })
        }
    }

    varietiesPick = (value) => {
        console.log(value[1])
        let data = Object.assign({}, this.state.addPet, { pet_varieties_id: value[1] })
        this.setState({
            pet_varieties_name: value,
            addPet: data
        })
    }

    addHandle = () => {

        this.props.dispatch({
            type: 'pet/addPet',
            payload: this.state.addPet
        })
    }

    loadList = () => {
        this.props.dispatch({
            type: 'pet/petCategory',
            callback: (res) => {
                console.log(res)
                this.setState({
                    petCateAll: res
                })
                let cate = [];
                res.map((item, index) => {
                    console.log(item)
                    if (item.level == 1) {
                        cate[index] = {
                            label: item.name,
                            value: item.id,
                            children: [],
                        }
                    } else if (item.level == 2) {
                        cate[item.pId - 1].children.push({ label: item.name, value: item.id });
                    }
                    this.setState({
                        petCate: cate
                    })
                    console.log(cate)
                })
            }
        })

    }

    componentDidMount() {
        this.loadList();

    }

    render() {
        console.log(this.state.petCate)
        return (
            <div >
                <NavComponent
                    navGoBack={this.goBack}
                    navkey="addpet"
                    navLeftContent={[<Icon type="left" />]}
                    navTitle="添加宠物"
                />
                <WhiteSpace size="lg" />
                <List className="my-list">
                    <ImagePicker
                        className="avatar_picker"
                        files={this.state.files}
                        onChange={this.onImagChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={this.state.files.length < 1}
                        multiple="false"
                        length="1"
                    />
                    <InputItem
                        type="text"
                        placeholder="设置宠物名称"
                        clear
                        value={this.state.pet_name}
                        onChange={(v) => {
                            this.setState({
                                pet_name: v,
                            })
                        }}
                        onBlur={(v) => {
                            let data = Object.assign({}, this.state.addPet, { pet_name: v })
                            this.setState({
                                addPet: data
                            })
                        }}
                    >宠物名称</InputItem>
                    <Picker
                        data={gender}
                        value={this.state.pet_sex}
                        onChange={this.onChangeGender}
                        cols={1}
                    >
                        <List.Item arrow="horizontal">宠物性别</List.Item>
                    </Picker>
                    <Picker
                        data={this.state.petCate}
                        value={this.state.pet_varieties_name}
                        onChange={this.varietiesPick}
                        cols={2}
                    >
                        <List.Item arrow="horizontal">宠物种类</List.Item>
                    </Picker>
                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra="请选择"
                        value={this.state.date}
                        onChange={(date, dateString) => {
                            this.setState({ date });
                            let time = moment(date).format('YYYY-MM-DD');
                            console.log(time)
                            let data = Object.assign({}, this.state.addPet, { pet_birth: time })
                            this.setState({
                                addPet: data
                            })
                        }}
                        format="YYYY-MM-DD"
                    >
                        <List.Item arrow="horizontal">宠物生日</List.Item>
                    </DatePicker>
                </List>
                <WhiteSpace size="lg" />
                <Button onClick={this.addHandle} type="warning">保存</Button>
            </div >
        );
    }
}

export default connect((pet, upload) => ({ pet, upload }))(AddPet);