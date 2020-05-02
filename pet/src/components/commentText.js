import React from 'react';
import PropTypes from 'prop-types'
import { InputItem, Flex, Button } from 'antd-mobile';
<<<<<<< HEAD
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

=======


const CommentText = ({ placeholder, maxLength }) => {
  
    return (
        <Flex justify="between">
        <InputItem placeholder="添加评论" onChange={onChange} />
        <Button onClick={sendHandle}>发送</Button>
        </Flex>
        
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
    );

}
CommentText.propTypes = {
<<<<<<< HEAD
    onChange: PropTypes.func,
    sendHandle: PropTypes.array,
=======
    onChange: PropTypes.func.isRequired,
    sendHandle: PropTypes.array.isRequired,
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
};

export default CommentText;