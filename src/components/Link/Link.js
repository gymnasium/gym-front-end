import React from 'react';
import PropTypes from 'prop-types';

import classes from './Link.module.css';

const Link = ({ children, to }) => (
  <a className={classes.link} href={to}>
    {children}
  </a>
);

Link.defaultProps = {
  to: '#',
};

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
