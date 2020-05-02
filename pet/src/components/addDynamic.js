import React, { Component } from 'react';
<<<<<<< HEAD
import { List, TextareaItem, ImagePicker, SegmentedControl, Icon } from 'antd-mobile';
=======
import { List, TextareaItem,ImagePicker, SegmentedControl } from 'antd-mobile';
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
import { createForm } from 'rc-form';

import NavComponent from './NavComponent'
import { Button, WhiteSpace } from 'antd-mobile';
<<<<<<< HEAD
import { connect } from 'dva';
=======
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
<<<<<<< HEAD
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

=======
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  }];
  
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96

class AddDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
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
=======
            files: data,
            multiple: false,
        }
    }
    releaseHandle = () => {
        console.log(1);
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
      onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
      }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="b">
                <NavComponent navGoBack={this.goBack} navkey="addDynamic" navRightContent={[<a style={{ color: 'white' }} onClick={this.releaseHandle}>发布</a>]}></NavComponent>
                <WhiteSpace size="md" />
                <div className="bc-white">
                    <List renderHeader={() => 'Count'}>
                        <TextareaItem
                            {...getFieldProps('count', {
                                initialValue: '#养宠日记#',
                            })}
                            rows={40}
                            count={800}
                        />
                    </List>
                    <div>
                        <SegmentedControl
                            values={['切换到单选', '切换到多选']}
                            selectedIndex={this.state.multiple ? 1 : 0}
                            onChange={this.onSegChange}
                        />
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 7}
                            multiple={this.state.multiple}
                        />

                    </div>
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
                </div>
                <div className="bc-white"></div>
            </div>
        );
    }
}

<<<<<<< HEAD
export default connect((upload) => ({ upload }))(createForm()(AddDynamic));
=======
export default AddDynamic;
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
