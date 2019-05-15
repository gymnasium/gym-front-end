import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import HeaderRow from './HeaderRow';
import { UserHeader } from './UserHeader';
import CONSTANTS from '../../utils/constants';

const Header = ({ siteTitle }) => {
  return (
    <header>
      <UserHeader />
      <HeaderRow backgroundColor="#222222">
        <Link to="/">{siteTitle}</Link>
        <Link to={`/${CONSTANTS.URLS.BLOG.LIST}`}>Blog</Link>
      </HeaderRow>
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
