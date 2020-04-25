import React, { Component } from 'react';
import NavComponent from '../../components/NavComponent';
import { Icon, List, Flex } from 'antd-mobile';
import { Link } from 'dva/router'
import Avatar from '../../components/Avatar'
import { connect } from 'dva';

const Item = List.Item;

const url = 'http://localhost:3000';

class PetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            petList: [],
            vareity: []
        }
    }
    // 返回上一页
    goBack = () => {
        this.props.history.replace('/index')
    }
    loadList = () => {
        this.props.dispatch({
            type: 'pet/petInfo',
            payload: this.state.userId,
            callback: (res) => {
                this.setState({
                    petList: res
                })
                let vary = [];
                res.map((item) => {
                    console.log(item)
                    this.props.dispatch({
                        type: 'pet/petCateDetail',
                        payload: item.pet_varieties_id,
                        callback: (res) => {
                            vary.push(res.name)
                            this.setState({
                                vareity: vary
                            })
                        }
                    });
                })
            }

        });

    }

    componentDidMount() {
        this.loadList();
    }
    componentDidUpdate() {


    }
    render() {
        return (
            <div>
                <NavComponent navGoBack={this.goback} navTitle="宠物列表" navLeftContent={[<Icon type="left" />]} />
                <List className="growth-list">
                    {
                        this.state.petList.map((item, index) => {
                            return (
                                <Item key={index} className="bc-white growth-item">
                                    <Link to={
                                        {
                                            pathname: `/index/petData`,
                                            state: item
                                        }
                                    }>
                                        <Flex className=" text-center">
                                            <Avatar src={item ? url + item.pet_avatar : "../images/avatar.jpg"} width="14vw"></Avatar>
                                            <div style={{ marginLeft: "4vw" }}>
                                                <div style={{ marginBottom: "2vw", fontSize: "4.352vw" }}>{item ? item.pet_name : ''} </div>
                                                <div style={{ marginBottom: "2vw", fontSize: "3.352vw" }}>{this.state.vareity ? this.state.vareity[index] : ''} </div>
                                            </div>
                                        </Flex>
                                    </Link>
                                </Item>
                            )
                        })
                    }

                </List>
            </div>
        );
    }
}

export default connect((pet) => ({ pet }))(PetList);