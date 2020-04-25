import React, { Component } from 'react';
import { InputItem, Button, WhiteSpace,  Toast, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../../../utils/iconfont/iconfont.css';
import './index.css'

import { createForm } from 'rc-form'
import { connect } from 'dva';




class Forget extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // 密码验证
    validatePassword = (rule, value, callback) => {
        if (value && value.length >= 6) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入密码'));
        } else {
            callback(new Error('请输入至少6位密码'));
        }
    }
    // 手机号码验证
    validateTel = (rule, value, callback) => {
        // let reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/
        if (value && value.length === 13) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入手机号码'));
        } else {
            callback(new Error('请输入正确的手机号码'));
        }
    }
    submitHandle = (e) => {
        e.preventDefault();

        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props);
                let formData = this.props.form.getFieldsValue();
                console.log(formData);
                this.props.dispatch({
                    type: 'user/forgetHandle',
                    payload: formData,
                });
            } else {
                console.log('手机号码或密码');
            }
        });

    }
    goback=()=>{
        this.props.history.push('/')
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="pink-box">
                <a onClick={this.goback}><Icon type="left" style={{color:'#fff'}} size="lg"></Icon></a>
                <div className="login-box">
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
                        placeholder="请设置密码"
                    >
                        <i className="anticon_pet anticonpassword"></i>
                    </InputItem>

                    <InputItem
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
                        <i className="anticon_pet anticonuser"></i>

                    </InputItem>

                    <InputItem
                        type="text"
                        clear
                        placeholder="请输入验证码"
                        extra={<Button style={{ position: 'absolute', top: 0, right: 0, zIndex: 2, padding: '0 3vw' }} 
                        type="warning">获取验证码</Button>}
                    >
                    </InputItem>

                    <WhiteSpace size='md' />

                    <Button type="warning" onClick={this.submitHandle}>确定</Button>
                </div >
            </div>

        );
    }
}

export default connect((user) => ({ user }))(createForm()(Forget));