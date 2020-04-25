import React, { Component } from 'react';
import { Flex, Icon, WhiteSpace, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import '../index.css'
import Avatar from '../../../components/Avatar'
import commentBox from '../../../components/commentBox'
import CommentBox from '../../../components/commentBox';
import CommentText from '../../../components/commentBox';

class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="dynamic-item pet-padding">
                    <div className="dynamic-header">
                        <Flex className="dynamic-userinfo" justify="between">
                            <Flex>
                                <Avatar></Avatar>
                                <div style={{ marginLeft: '3vw' }}>
                                    <div style={{ marginRight: '1vw', fontSize: '4.5vw' }}>猪小妹</div>
                                    <WhiteSpace size="sm" />
                                    <div>3天前</div>
                                </div>
                            </Flex>
                            <div className="attention">
                                <i className="anticon_pet anticonadd1"></i> 关注
                        </div>
                        </Flex>
                    </div>
                    <div className="dynamic-body">
                        <div className="dynamic-new-text">
                            今天是元宵节和妈妈在一起四周年的日子，要一直幸福快乐呀，一直永远陪伴
                </div>
                        <div className="dynamic-new-pictrue">
                            <Flex>
                                <img src="../images/pet/cat1.jpg" />
                                <img src="../images/pet/cat2.jpg" />
                                <img src="../images/pet/cat2.jpg" />
                            </Flex>
                        </div>
                    </div>
                    <div className="dynamic-footer">
                        <Flex justify="between">
                            <div>精选宠友</div>
                            <div className="dynamic-option">
                                <span style={{ marginRight: '2vw' }}><i className="anticon_pet anticonxihuan-dian"></i>133</span>
                                <span><i className="anticon_pet anticonpinglun"></i>6</span>
                            </div>
                        </Flex>
                    </div>
                </div>

                <WhiteSpace size="md" />

                {/**评论区 */}

                <div className="bc-white">
                    <Flex>
                        <span>评论</span>
                        <span>谁赞过</span>
                    </Flex>
                    <CommentBox data={data}></CommentBox>
                {/**添加评论 */}
                <CommentText></CommentText>
                </div>

            </div>
        );
    }
}

export default Dynamic;



