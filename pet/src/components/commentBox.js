import React from 'react';
import PropTypes from 'prop-types'
<<<<<<< HEAD
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
=======
import { List } from 'antd-mobile';

const Item = List.Item;

const CommentBox = ({data }) => {
    <List renderHeader={() => 'Basic Style'} className="my-list">
        <Item extra={time}>
            <Flex>
                <Avatar></Avatar>
                <div style={{ marginLeft: '3vw' }}>
                    <div style={{ marginRight: '1vw', fontSize: '4.5vw' }}>{data.username}</div>
                    <WhiteSpace size="sm" />
                    <div>{data.content}</div>
                </div>
            </Flex>
        </Item>
    </List>

}
Edit.propTypes = {
    data: PropTypes.func.isRequired,
};
export default CommentBox
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
