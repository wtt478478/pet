import React, { Component } from 'react';
<<<<<<< HEAD
import { Icon, Flex, List, WhiteSpace } from 'antd-mobile';
import { Link } from 'dva/router'
=======
import { NavBar, Icon, Flex, List, WhiteSpace } from 'antd-mobile';
import { Link, Route } from 'dva/router'
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
import 'antd-mobile/dist/antd-mobile.css';
import '../../utils/iconfont/iconfont.css';
import './index.css'

import Item from 'antd-mobile/lib/popover/Item';
import Avatar from '../../components/Avatar'

import { connect } from 'dva'

const url = 'http://localhost:3000';


class PetCare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            petList: [],
            articleList: [],
            tagList: []
        }
    }
    loadList = () => {
        this.props.dispatch({
            type: 'pet/petInfo',
            payload: this.state.userId,
            callback: (res) => {
                this.setState({
                    petList: res
                })
            }
        });
        this.props.dispatch({
            type: 'article/articleTag',
            callback: (res) => {
                this.setState({
                    tagList: res
                })
            }
        })
        this.props.dispatch({
            type: 'article/articleList',
            callback: (res) => {
                this.setState({
                    articleList: res
                });
            }
        });

    }

    componentDidMount() {
        this.loadList();
    }
    render() {
        return (
            <div className="pet-care">
                {/**成长中心 */}
                <div className="pet-padding growth-center" style={{ backgroundColor: '#c7f2fd', paddingTop: '4vw' }}>
                    <Flex justify="between" style={{ marginBottom: "3vw", fontSize: "4.259vw" }}>
                        <div>成长中心</div>
                        <div>
                            <Link to="/index/addPet">
                                <i className="anticon_pet anticonadd"></i>
                            </Link>
                        </div>
                    </Flex>
                    <List className="growth-list">
<<<<<<< HEAD
                        {
                            this.state.petList.map((item, index) => {
                                return (
                                    <Item key={index} className="bc-white pet-padding growth-item">
                                        <Link to={
                                            {
                                                pathname: `/index/petData`,
                                                state: item
                                            }
                                        }>
                                            <Flex className="pet-padding text-center">
                                                <Avatar src={item ? url + item.pet_avatar : "../images/avatar.jpg"} width="18vw"></Avatar>
                                                <div style={{ marginLeft: "4vw" }}>
                                                    <div style={{ marginBottom: "3vw", fontSize: "4.352vw" }}>{item ? item.pet_name : ''} <i style={{ color: "#4ca4f8" }} className="anticon_pet anticonCatFootprint"></i></div>
                                                    <div>
                                                        <span style={{ verticalAlign: 'middle' }} >设置宠物信息</span><Icon type="right" style={{ verticalAlign: 'middle' }} />
                                                    </div>
                                                </div>

                                            </Flex>
                                        </Link>
                                    </Item>
                                )
                            })
                        }

=======
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
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
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
                        {
                            this.state.articleList.map((item, index) => {

                                if (item.cate_id == 1) {

                                    return (
                                        <Item key={index} className="treasure-item">
                                            <Link to={
                                                {
                                                    pathname: `/index/articleDetail`,
                                                    state: item
                                                }
                                            }>
                                                <Flex justify="between">
                                                    <Flex direction="column" align="start" justify="between" className="treasure-des">
                                                        <div style={{ fontSize: '4.62vw' }}>{item.title}</div>
                                                        <div style={{ fontSize: '2.6vw' }}>{this.state.tagList[item.tag_id - 1].name}</div>
                                                    </Flex>
                                                    <div className="treasure-img"><img src={url + item.main_photo} alt="主图" /></div>
                                                </Flex>
                                            </Link>
                                        </Item>
                                    )
                                }

                            })
                        }
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
                        {
                            this.state.articleList.map((item, index) => {
                                if (item.cate_id == 2) {
                                    return (
                                        <div key={index} className="knowledge-item">
                                            <Link to={
                                                {
                                                    pathname: `/index/articleDetail`,
                                                    state: item
                                                }
                                            }>
                                                <img src={url + item.main_photo} alt="主图" />
                                                <div className="knowledge-item-cover">关键词:<span>{item.title}</span></div>
                                            </Link>
                                        </div>
                                    )
                                }

                            })
                        }

                    </div>
                </div>

                <WhiteSpace size="lg" />

<<<<<<< HEAD
            </div >
=======
            </div>
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
        );
    }
}

export default connect((pet, article) => ({ pet, article }))(PetCare);