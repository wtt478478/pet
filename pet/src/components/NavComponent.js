<<<<<<< HEAD
import React from 'react';
import { NavBar } from 'antd-mobile';
=======
import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
import PropTypes from 'prop-types';

const NavComponent = ({ navGoBack, navkey, navLeftContent, navRightContent, navTitle }) => {
  return (
    <NavBar
      mode="dark"
      key={navkey}
      style={{ backgroundColor: '#f1483c' }}
      onLeftClick={navGoBack}
      leftContent={navLeftContent}
      rightContent={navRightContent}
    >{navTitle}</NavBar>

  );
};

NavComponent.propTypes = {
  navGoBack: PropTypes.func,
  navkey: PropTypes.string,
  navLeftContent: PropTypes.any,
  navRightContent: PropTypes.any,
  navTitle: PropTypes.any.isRequired,
};

export default NavComponent;
