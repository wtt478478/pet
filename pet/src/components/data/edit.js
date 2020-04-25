import React from 'react';
import PropTypes from 'prop-types'
import { InputItem } from 'antd-mobile';


const Edit = ({ placeholder, maxLength }) => {
  
    return (
        <InputItem placeholder={placeholder} maxLength={maxLength} />
    );

}
Edit.propTypes = {
    placeholder: PropTypes.func.isRequired,
    maxLength: PropTypes.array.isRequired,
};

export default Edit;