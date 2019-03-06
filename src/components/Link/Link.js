import React from 'react';
import PropTypes from 'prop-types';

import './Link.module.css';

const Link = ({ children, to }) => <a href={to}>{children}</a>;

Link.defaultProps = {
  to: '#',
};

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
