import React, { Component } from 'react';
import { Flex, Icon, WhiteSpace, NavBar, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css'
import Avatar from '../../components/Avatar'


class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="community">


                {/**动态分类 */}

                <Flex justify="between" className="dynamic-class pet-padding bc-white">
                    <Flex.Item>
                        <div><i><img style={{ width: "11.481vw" }} src="../images/community/suggest.png" /></i></div>
                        <WhiteSpace size="sm" />
                        <div className="dynamic-class-title">推荐</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div><i><img style={{ width: "11.481vw" }} src="../images/community/new.png" /></i></div>
                        <WhiteSpace size="sm" />
                        <div className="dynamic-class-title">最新</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div><i><img style={{ width: "11.481vw" }} src="../images/community/yanzhi.png" /></i></div>
                        <WhiteSpace size="sm" />
                        <div className="dynamic-class-title">颜值</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div><i><img style={{ width: "11.481vw" }} src="../images/community/star.png" /></i></div>
                        <WhiteSpace size="sm" />
                        <div className="dynamic-class-title">明星</div>
                    </Flex.Item>
                </Flex>

                <WhiteSpace size="lg" />

                {/**动态 */}
                <div className="dynamic-list bc-white">
                    <div className="dynamic-item pet-padding">
                        <div className="dynamic-header">
                            <Flex className="dynamic-userinfo" justify="between">
                                <Flex>
                                    <Avatar src="../images/avatar.jpg" width="12vw"></Avatar>
                                    <div style={{ marginLeft: '3vw' }}>
                                        <div style={{ marginRight: '1vw', fontSize: '4.5vw' }}>猪小妹</div>
                                        <WhiteSpace size="sm" />
                                        <div>3天前</div>
                                    </div>
                                </Flex>
                                <Button className="attention"><i className="anticon_pet anticonadd1"></i> 关注</Button>
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

                    <div className="divider-line "></div>

                    <div className="dynamic-item pet-padding">
                        <div className="dynamic-header">
                            <Flex className="dynamic-userinfo" justify="between">
                                <Flex>
                                    <Avatar src="../images/avatar.jpg" width="12vw"></Avatar>
                                    <div style={{ marginLeft: '3vw' }}>
                                        <div style={{ marginRight: '1vw', fontSize: '4.5vw' }}>猪小妹</div>
                                        <WhiteSpace size="sm" />
                                        <div>3天前</div>
                                    </div>
                                </Flex>
                                <Button className="attention"><i className="anticon_pet anticonadd1"></i> 关注</Button>
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

                </div>

                <WhiteSpace size="lg" />


            </div>

        );
    }
}

export default Community;