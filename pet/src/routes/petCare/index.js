import React, { Component } from 'react';
import { NavBar, Icon, Flex, List, WhiteSpace } from 'antd-mobile';
import { Link, Route } from 'dva/router'
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css'

import Item from 'antd-mobile/lib/popover/Item';
import Avatar from '../../components/Avatar'



class PetCare extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="pet-care">
                {/**成长中心 */}
                <div className="pet-padding growth-center" style={{ backgroundColor: '#c7f2fd', paddingTop: '4vw' }}>
                    <Flex justify="between" style={{ marginBottom: "3vw", fontSize: "4.259vw" }}>
                        <div>成长中心</div>
                        <div>
                            <i className="anticon_pet anticonadd"></i>
                        </div>
                    </Flex>
                    <List className="growth-list">
                        <Item className="bc-white pet-padding growth-item">

                            <Flex justify="between" className="pet-padding text-center">
                                <Flex style={{ marginBottom: "3vw" }}>
                                    <Avatar src="../images/avatar.jpg" width="18vw"></Avatar>
                                    <div style={{ marginLeft: "4vw" }}>
                                        <div style={{ marginBottom: "3vw", fontSize: "4.352vw" }}>小白 <i style={{ color: "#4ca4f8" }} className="anticon_pet anticonCatFootprint"></i></div>
                                        <div>
                                            <Link to="/index/petData">
                                                <span style={{ verticalAlign: 'middle' }} >设置陪伴时间</span><Icon type="right" style={{ verticalAlign: 'middle' }} />
                                            </Link>

                                        </div>
                                    </div>
                                </Flex>
                                <div>
                                    <Link to="/index/petDiary">
                                        <div style={{ textAlign: 'center' }} ><i><img style={{ width: "4vw" }} src="../images/diary.png" /></i></div>
                                        <WhiteSpace size="sm" />
                                        <div>写日记</div>
                                    </Link>
                                </div>

                            </Flex>
                        </Item>
                    </List>

                </div>

                <WhiteSpace size="lg" />


                {/**宠物宝典 */}
                <div className="pet-treasure bc-white pet-padding">
                    <Flex className="title" justify="between">
                        <span>宠物宝典</span>
                        <span><span style={{ verticalAlign: "middle" }}>更多</span><Icon style={{ verticalAlign: "middle" }} type="right"></Icon></span>
                    </Flex>
                    <List className="treasure-list">
                        <Item className="treasure-item">
                            <Flex justify="between">
                                <Flex direction="column" align="start" justify="between" className="treasure-des">
                                    <div style={{ fontSize: '4.62vw' }}>叫你如何挑选健康的比熊犬</div>
                                    <div style={{ fontSize: '2.6vw' }}>选购</div>
                                </Flex>
                                <div className="treasure-img"><img src="../images/pet/dog1.jpg" /></div>
                            </Flex>
                        </Item>
                        <Item className="treasure-item">
                            <Flex justify="between">
                                <div className="treasure-des">
                                    <Flex direction="column" align="start" justify="between" className="treasure-des">
                                        <div style={{ fontSize: '4.62vw' }}>叫你如何挑选健康的比熊犬</div>
                                        <div style={{ fontSize: '2.6vw' }}>选购</div>
                                    </Flex>
                                </div>

                                <div className="treasure-img"><img src="../images/pet/dog1.jpg" /></div>
                            </Flex>
                        </Item>

                    </List>

                </div>

                <WhiteSpace size="lg" />

                {/** 宠物知识*/}
                <div className="pet-knowledge bc-white pet-padding">
                    <Flex className="title" justify="between">
                        <span>宠物知识</span>
                        <span><span style={{ verticalAlign: "middle" }}>更多</span><Icon style={{ verticalAlign: "middle" }} type="right"></Icon></span>
                    </Flex>
                    <div className="knowledge-list">
                        <div className="knowledge-item">
                            <img src="../images/pet/dog2.jpg" />
                            <div className="knowledge-item-cover">关键词<span>狗狗条件反射、呵斥狗狗、胆...</span></div>
                        </div>
                    </div>
                </div>

                <WhiteSpace size="lg" />

            </div>
        );
    }
}

export default PetCare;