import React, { Component } from 'react';
import { InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import { Link } from "dva/router";
import { connect } from 'dva';
import 'antd-mobile/dist/antd-mobile.css';
import '../../../utils/iconfont/iconfont.css';
import './index.css'

import { createForm } from 'rc-form'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
        if (value && value.length === 13) {
            callback();
        } else if (value.length === 0) {
            console.log
            callback(new Error('请输入手机号码'));
        } else {
            callback(new Error('请输入正确的手机号码'));
        }
    }

    // 登录
    loginHandle = e => {
        e.preventDefault();

        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                let formData = this.props.form.getFieldsValue();
                this.props.dispatch({
                    type: 'user/loginHandle',
                    payload: formData,
                });
            } else {
                console.log('手机号码或密码');
                
            }
        });

    }

    ReagisterHandle = () => {
        this.props.history.push("/register")
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="pink-box">
                <form className="login-box">

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
                        <i className="anticon_pet anticonpassword"></i>
                    </InputItem>

                    <Link to="/forget" >忘记密码？</Link>

                    <WhiteSpace size='md' />

                    <Button type="warning" onClick={this.loginHandle}>登录</Button>
                    <Button onClick={this.ReagisterHandle}>注册</Button>
                </form>
            </div>
        );
    }
};

export default connect((user) => ({
    user
}))(createForm()(Login));