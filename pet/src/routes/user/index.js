import React, { Component } from 'react';
import { Flex, Icon, WhiteSpace, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css'
import Avatar from '../../components/Avatar'



class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="pet-user">

                { /** 个人主页 */}

                <Flex className="homePage pet-padding bc-white" justify="between">
                    <div>
                        <Flex>
                            <Avatar  src="../images/avatar.jpg" width="18vw"></Avatar>
                            <div style={{ marginLeft: '3vw' }}>
                                <div>
                                    <span style={{ marginRight: '1vw', fontSize: '4.5vw' }}>好好吃饭</span>
                                    <span><i style={{ color: 'pink' }} className="anticon_pet anticongender-female"></i></span>
                                </div>
                                <WhiteSpace size="sm" />
                                <div>
                                    宠号:<span style={{ marginLeft: '3vw' }}>4691736</span>
                                </div>
                            </div>
                        </Flex>
                    </div>
                    <div>
                        <span >个人主页 <Icon style={{ verticalAlign: 'middle' }} type="right"></Icon></span>
                    </div>
                </Flex>

                <WhiteSpace size="lg" />

                { /** 日常管理 */}
                <div className="pet-user-list daily  bc-white">
                    <div className="title">日常管理</div>
                    <div className="divider-line"></div>
                    <Flex justify="between" className="pet-padding">
                        <Flex.Item>
                            <div><i className="anticon_pet anticoncat"></i></div>
                            <WhiteSpace size="sm" />
                            <div>宠物</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonboy"></i></div>
                            <WhiteSpace size="sm" />
                            <div>宠友</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonhome"></i></div>
                            <WhiteSpace size="sm" />
                            <div>社区</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonshoucang1"></i></div>
                            <WhiteSpace size="sm" />
                            <div>收藏</div>
                        </Flex.Item>
                    </Flex>
                </div>

                <WhiteSpace size="lg" />

                { /** 商城购物 */}
                <div className="pet-user-list shopping-mall bc-white">
                    <div className="title">商城购物</div>
                    <div className="divider-line"></div>
                    <Flex justify="between" className="pet-padding">
                        <Flex.Item>
                            <div><i className="anticon_pet anticonai-cart"></i></div>
                            <WhiteSpace size="sm" />
                            <div>我的购物车</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticon5"></i></div>
                            <WhiteSpace size="sm" />
                            <div>我的订单</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonshouhou"></i></div>
                            <WhiteSpace size="sm" />
                            <div>我的售后</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticondizhi1"></i></div>
                            <WhiteSpace size="sm" />
                            <div>收货地址</div>
                        </Flex.Item>
                    </Flex>
                </div>

                <WhiteSpace size="lg" />

                { /** 其他 */}

                <div className="pet-user-list other bc-white">
                    <div className="title">其他</div>
                    <div className="divider-line"></div>
                    <Flex justify="between" className="pet-padding">
                        <Flex.Item>
                            <div><i style={{ color: '#fecb87' }} className="anticon_pet anticonshangjia"></i></div>
                            <WhiteSpace size="sm" />
                            <div>商家入驻</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i style={{ color: '#d0a5ef' }} className="anticon_pet anticonyijianfankui01"></i></div>
                            <WhiteSpace size="sm" />
                            <div>意见反馈</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i style={{ color: '#bababa' }} className="anticon_pet anticonshezhi"></i></div>
                            <WhiteSpace size="sm" />
                            <div>设置</div>
                        </Flex.Item>

                    </Flex>
                </div>

                <WhiteSpace size="lg" />



            </div>
        );
    }
}

export default User;