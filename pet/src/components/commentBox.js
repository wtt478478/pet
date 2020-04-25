import React from 'react';
import PropTypes from 'prop-types'
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
