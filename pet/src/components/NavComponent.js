import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
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
