import React from 'react';
import PropTypes from 'prop-types'

const Avatar = ({ src,width}) => {

    return (
        <span className="pet-avatar" style={{width:width,height:width, borderRadius: '50%',
        overflow:'hidden',display:'inline-block'}}>
            <img src={src} style={{width: '100%'}} />

        </span>
    );
}

Avatar.propTypes={
    src: PropTypes.any.isRequired,
    width: PropTypes.any.isRequired,
}

export default Avatar;