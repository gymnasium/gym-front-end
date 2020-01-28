import PropTypes from 'prop-types';
import React from 'react';

import { PrimaryNavigation, SecondaryNavigation } from '@gymnasium/gym-ui';

const Header = ({ siteTitle }) => {
  return (
    <header>
      <PrimaryNavigation isLoggedIn logoutUrl="/logout" userId="Mike Bifulco" />
      <SecondaryNavigation isLoggedIn />
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
