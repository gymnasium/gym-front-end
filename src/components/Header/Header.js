import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import classes from './Header.module.css';

import topRowClasses from './TopRowClasses.module.css';

import HeaderRow from './HeaderRow';

const Header = ({ siteTitle }) => {
  console.log('classes are', classes);
  return (
    <header>
      <HeaderRow classes={topRowClasses}>MikeBifulco</HeaderRow>
      <HeaderRow backgroundColor="#222222">
        <Link to="/">{siteTitle}</Link>
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
