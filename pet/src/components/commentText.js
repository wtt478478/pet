import React from 'react';
import PropTypes from 'prop-types'
import { InputItem, Flex, Button } from 'antd-mobile';
import './style.css'

const CommentText = ({ onChange, sendHandle }) => {

    return (
        <div className="commentText">
            <InputItem placeholder="添加评论" onChange={onChange}
            extra={[<Button>发送</Button>]}
            onExtraClick={sendHandle}
            maxLength="100"
            />
            
        </div>

    );

}
CommentText.propTypes = {
    onChange: PropTypes.func,
    sendHandle: PropTypes.array,
};

export default CommentText;