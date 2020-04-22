import React, { Component } from 'react';
import { InputItem, Button, WhiteSpace, Flex } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../../../utils/iconfont/iconfont.css';
import './index.css'

import {createForm} from 'rc-form'




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="pink-box">
                <div className="login-box">

                    <InputItem
                        {...getFieldProps('inputtitle1')}
                        placeholder="请输入用户名"
                    >
                        <i className="iconfont icon-user"></i>

                    </InputItem>

                    <InputItem
                        {...getFieldProps('inputtitle2')}
                        placeholder="请设置密码"
                    >
                        <i className="iconfont icon-password"></i>
                    </InputItem>

                    <InputItem
                        {...getFieldProps('inputtitle2')}
                        placeholder="请输入手机号码"
                    >
                        <i className="iconfont icon-password"></i>
                    </InputItem>

                    <Flex>
                        <Flex.Item>
                            <InputItem
                                {...getFieldProps('inputtitle2')}
                                placeholder="请输入验证码"
                            >
                                <i className="iconfont icon-password"></i>
                            </InputItem>
                        </Flex.Item>
                        <Flex.Item>
                            <Button type="warning">获取验证码</Button>
                        </Flex.Item>
                    </Flex>

                    <WhiteSpace size='md' />

                    <Button type="warning">确定</Button>
                </div >
            </div>

        );
    }
}

export default Login = createForm()(Login);