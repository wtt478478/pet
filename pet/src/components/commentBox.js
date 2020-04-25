import React from 'react';
import PropTypes from 'prop-types'
import { List, Flex, WhiteSpace } from 'antd-mobile';
import { connect } from 'dva'

import Avatar from './Avatar'

const Item = List.Item;



const CommentBox = ({data }) => {
    let userInfo=data;
    console.log(userInfo)
    // function getUserInfo() {
    //     console.log(data)
    //     dispatch({
    //         type:'user/userInfo',
    //         payload:data,
    //         callback:(res)=>{
    //             userInfo=res;
    //         }
    //     })
    //     console.log(userInfo);
    //     return userInfo
    // }
    // getUserInfo();
    return (
        <List className="my-list">
            <Item>
                <Flex>
                    <Avatar></Avatar>
                    <div style={{ marginLeft: '3vw' }}>
                        <div style={{ marginRight: '1vw', fontSize: '4.5vw' }}></div>
                        <WhiteSpace size="sm" />
                        <div></div>
                    </div>
                </Flex>
                <div></div>
            </Item>
        </List>
    )

}
CommentBox.propTypes = {
    data: PropTypes.any,
};
export default connect((user) => { user })(CommentBox)
