import React, { Component } from 'react';
import { List, TextareaItem, ImagePicker, SegmentedControl, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';

import NavComponent from './NavComponent'
import { Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'dva';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];


class AddDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            multiple: false,
        }
    }
    // 发布动态
    releaseHandle = () => {
        console.log(1);
        this.props.form.validateFields({ force: true }, (error) => {
            let formData = this.props.form.getFieldsValue();
            console.log(formData)
        });
    }
    // 返回上一步
    goBack = () => {
        this.props.history.push('/index');
    }
    onImagChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
        if (type == 'add') {
            let formData=new FormData();
            for (let key in this.state.files) {
              formData.append("file",this.state.files[key].file);
              let file={};
              file.name=this.state.files[key].file.name;
              file.lastModified=this.state.files[key].file.lastModified;
              file.lastModified=this.state.files[key].file.lastModified;
              file.size=this.state.files[key].file.size;
              file.type=this.state.files[key].file.type;
              file.url=this.state.files[key].url;
              file.orientation=this.state.files[key].orientation;
                this.props.dispatch({
                    type: 'upload/upload',
                    payload: {file:file},
                    callback: (res) => {
                        console.log(res)
                    }
                })
            }
     

        }
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="bc-white">
                <NavComponent navGoBack={this.goBack} navkey="addDynamic" navLeftContent={[<Icon type="left" />]} navRightContent={[<a style={{ color: 'white' }} onClick={this.releaseHandle}>发布动态</a>]}></NavComponent>
                <WhiteSpace size="md" />
                <div className="bc-white">
                    <form id="myform" name="myform">
                        <List>
                            <TextareaItem
                                {...getFieldProps('text', {
                                    initialValue: '',
                                })}
                                placeholder="添加动态"
                                rows={6}
                                count={400}
                            />
                        </List>
                        <div className="pet-padding">
                            <ImagePicker
                                files={this.state.files}
                                onChange={this.onImagChange}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={this.state.files.length < 10}
                                multiple="false"
                                length="4"
                            />
                        </div>
                    </form>
                </div>
                <div className="bc-white"></div>
            </div>
        );
    }
}

export default connect((upload) => ({ upload }))(createForm()(AddDynamic));