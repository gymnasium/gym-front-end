import React from 'react';

import { useSelector } from 'react-redux';

import { SecondaryNavigation } from '@gymnasium/gym-ui';

import { UserBar } from './UserBar';

const Header = () => {
  const authState = useSelector(state => state.auth);
  const { isLoggedIn } = authState;

  return (
    <header>
      <UserBar />
      <SecondaryNavigation isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Header;
