import React from 'react';
import PropTypes from 'prop-types'
import { InputItem, Flex, Button } from 'antd-mobile';


const CommentText = ({ placeholder, maxLength }) => {
  
    return (
        <Flex justify="between">
        <InputItem placeholder="添加评论" onChange={onChange} />
        <Button onClick={sendHandle}>发送</Button>
        </Flex>
        
    );

}
CommentText.propTypes = {
    onChange: PropTypes.func.isRequired,
    sendHandle: PropTypes.array.isRequired,
};

export default CommentText;