import React from 'react';

import { useSelector } from 'react-redux';

import { UserBar } from './UserBar';
import { SecondaryNavigation } from './SecondaryNavigation';

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
