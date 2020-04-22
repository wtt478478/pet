import React, { Component } from 'react';
import { InputItem, Button, WhiteSpace, Checkbox } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../../utils/iconfont/iconfont.css';
import './index.css'

import { createForm } from 'rc-form'

const AgreeItem = Checkbox.AgreeItem;


class Register extends Component {
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
                        placeholder="请输入密码"
                    >
                        <i className="iconfont icon-password"></i>
                    </InputItem>

                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                         <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>同意协议</a>
                    </AgreeItem>
                    <WhiteSpace size='md' />

                    <Button type="warning">下一步</Button>
                </div >
            </div>

        );
    }
}

export default Register = createForm()(Register);