import React from 'react';

import HeaderRow from '../HeaderRow';
import classes from './UserHeader.module.css';

const UserHeader = () => {
  console.log('classes are', classes);
  return <HeaderRow classes={classes}>MikeBifulco</HeaderRow>;
};

export default UserHeader;
