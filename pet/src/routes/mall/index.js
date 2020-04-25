import React, { Component } from 'react';
import { NavBar, Icon, SearchBar, Flex, WhiteSpace, Grid } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css'


class Mall extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="pet-mall">

                {/**分类 */}
                <div className="mall-sort bc-white">
                    <Flex justify="between" className="pet-padding" wrap="wrap">
                        <Flex.Item>
                            <div><i className="anticon_pet anticonicon-test"></i></div>
                            <div>粮食</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonlingshi"></i></div>
                            <div>零食</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonqingjie"></i></div>
                            <div>清洁</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonyiyaobaojian"></i></div>
                            <div>保健</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonlongtouhuasa"></i></div>
                            <div>日用品 </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonpintuanzhuanqu"></i></div>
                            <div>拼团</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonyouhuiquan01"></i></div>
                            <div>优惠券</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div><i className="anticon_pet anticonfeiji800"></i></div>
                            <div>全球购</div>
                        </Flex.Item>
                    </Flex>
                </div>

                <WhiteSpace size="lg" />

                {/**热门推荐 */}
                <div className="hot-recommend pet-padding bc-white">
                    <div>
                        <div className="mall-module-title">热门推荐</div>
                        <div className="mall-module-pictrue">
                            <img src="../images/mall/banner1.jpg " />
                        </div>
                    </div>
                    <WhiteSpace size="md" />
                    <Flex style={{ position: "relative" }}>
                        <div className="recommend_item">
                            <img style={{ width: "100%" }} src="../images/mall/hot_recommend.png" />
                        </div>
                        <div className="recommend_item">
                            <Flex justify="between">
                                <img style={{ width: "100%" }} src="../images/mall/hot_recommend2.png" />
                            </Flex>
                            <div className="divider"></div>
                            <Flex justify="between">
                                <img style={{ width: "100%" }} src="../images/mall/hot_recommend3.png" />
                            </Flex>
                        </div>
                    </Flex>

                </div>
                <WhiteSpace size="lg" />

                {/**限时特惠 */}
                <div className="Preferential-time bc-white pet-padding">
                    <Flex justify="between" className="pet-padding">
                        <span>限时优惠</span>
                        <span >更多<Icon type="right" style={{ verticalAlign: "middle" }} /></span>
                    </Flex>
                    <WhiteSpace size="md" />
                    <Flex>
                        <div>
                            <img style={{ width: '100%' }} src="../images/mall/limit_time1.png" />
                            <div>路斯 牛肉粒-经典原味</div>
                            <Flex justify="between">
                                <span style={{ color: 'red' }}>￥35</span>
                                <span><del>￥70</del></span>
                            </Flex>
                        </div>
                        <div>
                            <img style={{ width: '100%' }} src="../images/mall/limit_time1.png" />
                            <div>路斯 牛肉粒-经典原味</div>
                            <Flex justify="between">
                                <span style={{ color: 'red' }}>￥35</span>
                                <span><del>￥70</del></span>
                            </Flex>
                        </div>

                        <div>
                            <img style={{ width: '100%' }} src="../images/mall/limit_time1.png" />
                            <div>路斯 牛肉粒-经典原味</div>
                            <Flex justify="between">
                                <span style={{ color: 'red' }}>￥35</span>
                                <span><del>￥70</del></span>
                            </Flex>
                        </div>

                    </Flex>
                </div>

                <WhiteSpace size="lg" />

                {/**热门推荐 */}
                <div className="hot-recommend pet-padding bc-white">
                    <div>
                        <div className="mall-module-title">热门推荐</div>
                        <div className="mall-module-pictrue">
                            <img src="../images/mall/banner1.jpg " />
                        </div>
                    </div>
                    <WhiteSpace size="md" />
                    <Flex style={{ position: "relative" }}>
                        <div className="recommend_item">
                            <img style={{ width: "100%" }} src="../images/mall/hot_recommend.png" />
                        </div>
                        <div className="recommend_item">
                            <Flex justify="between">
                                <img style={{ width: "100%" }} src="../images/mall/hot_recommend2.png" />
                            </Flex>
                            <div className="divider"></div>
                            <Flex justify="between">
                                <img style={{ width: "100%" }} src="../images/mall/hot_recommend3.png" />
                            </Flex>
                        </div>
                    </Flex>

                </div>
                <WhiteSpace size="lg" />

                 {/**猜你喜欢 */}
                 <div className="Preferential-time bc-white pet-padding">
                 <div className="mall-module-title">猜你喜欢</div>
                 <WhiteSpace size="md" />
                 <Flex>
                     <div>
                         <img style={{ width: '100%' }} src="../images/mall/limit_time1.png" />
                         <div>路斯 牛肉粒-经典原味</div>
                         <Flex justify="between">
                             <span style={{ color: 'red' }}>￥35</span>
                             <span><del>￥70</del></span>
                         </Flex>
                     </div>
                     <div>
                         <img style={{ width: '100%' }} src="../images/mall/limit_time1.png" />
                         <div>路斯 牛肉粒-经典原味</div>
                         <Flex justify="between">
                             <span style={{ color: 'red' }}>￥35</span>
                             <span><del>￥70</del></span>
                         </Flex>
                     </div>

                     <div>
                         <img style={{ width: '100%' }} src="../images/mall/limit_time1.png" />
                         <div>路斯 牛肉粒-经典原味</div>
                         <Flex justify="between">
                             <span style={{ color: 'red' }}>￥35</span>
                             <span><del>￥70</del></span>
                         </Flex>
                     </div>

                 </Flex>
             </div>

             <WhiteSpace size="lg" />
            </div>
        );
    }
}

export default Mall;