import React, { Component } from 'react';
import { List, TextareaItem,ImagePicker, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';

import NavComponent from './NavComponent'
import { Button, WhiteSpace } from 'antd-mobile';

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
                </div>
                <div className="bc-white"></div>
            </div>
        );
    }
}

export default AddDynamic;