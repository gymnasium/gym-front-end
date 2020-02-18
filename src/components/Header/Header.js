import PropTypes from 'prop-types';
import React from 'react';

import { useSelector } from 'react-redux';

import { PrimaryNavigation, SecondaryNavigation } from '@gymnasium/gym-ui';

const Header = ({ siteTitle }) => {
  const authState = useSelector(state => state.auth);
  const { isLoggedIn, user } = authState;

  return (
    <header>
      <PrimaryNavigation
        isLoggedIn={isLoggedIn}
        logoutUrl="/logout"
        userId={user.displayName}
      />
      <SecondaryNavigation isLoggedIn={isLoggedIn} />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
