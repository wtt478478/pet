import React, { Component } from 'react';
import { InputItem, Button, WhiteSpace, Checkbox,Toast, } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../../utils/iconfont/iconfont.css';
import './index.css'

import { createForm } from 'rc-form'
import { connect } from 'dva';

const AgreeItem = Checkbox.AgreeItem;


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAgree:false
        }
    }

    // 用户名验证
    validateUserN = (rule, value, callback) => {
        if (value && value.length >= 3) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入用户名'));
        } else {
            callback(new Error('用户名不少于3位'));
        }
    }

      // 密码验证
      validatePassword = (rule, value, callback) => {
        if (value && value.length >= 8) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入密码'));
        } else {
            callback(new Error('请输入至少8位密码'));
        }
    }
    // 手机号码验证
    validateTel = (rule, value, callback) => {
        if (value && value.length === 13) {
            callback();
        } else if (value.length === 0) {
            console.log
            callback(new Error('请输入手机号码'));
        } else {
            callback(new Error('请输入正确的手机号码'));
        }
    }

    agreeHandle=()=>{
        this.setState({
            isAgree:!this.state.isAgree
        });
    }

    registerHandle=()=>{
        console.log('111')
        if(!this.state.isAgree){
            Toast.info('请勾选协议');
        }else{
             this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props);
                let formData = this.props.form.getFieldsValue();
                console.log(formData);
                this.props.dispatch({
                    type: 'user/registerHandle',
                    payload: formData,
                });
            } else {
                console.log('请输入正确的用户信息');
            }
        });
        }
       

    }

    render() {
        const { getFieldProps,getFieldError } = this.props.form;
        return (
            <div className="pink-box">
                <div className="login-box">
                    <InputItem
                        {...getFieldProps('username', {
                            rules: [
                                { validator: this.validateUserN },
                            ],
                        })}
                        error={!!getFieldError('username')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('username'), 1);
                        }}
                        type="text"
                        clear
                        placeholder="请输入用户名"
                    >
                        <i className="iconfont icon-user"></i>

                    </InputItem><InputItem
                        {...getFieldProps('tel', {
                            rules: [
                                { validator: this.validateTel },
                            ],
                        })}
                        error={!!getFieldError('tel')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('tel'), 1);
                        }}
                        type="phone"
                        clear
                        placeholder="请输入手机号码"
                    >
                        <i className="iconfont icon-user"></i>

                    </InputItem>

                    <InputItem
                        {...getFieldProps('password', {
                            rules: [
                                { validator: this.validatePassword },
                            ],
                        })}
                        error={!!getFieldError('password')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('password'), 1);
                        }}
                        type="password"
                        clear
                        placeholder="请输入密码"
                    >
                        <i className="iconfont icon-password"></i>
                    </InputItem>
                    <WhiteSpace size='md' />

                    <AgreeItem onChange={this.agreeHandle}>
                        <a onClick={(e) => { e.preventDefault();}}>同意协议</a>
                    </AgreeItem>
                    <WhiteSpace size='md' />

                    <Button type="warning" onClick={this.registerHandle}>完成</Button>
                </div >
            </div>

        );
    }
}

export default connect((user)=>({user}))(createForm()(Register));