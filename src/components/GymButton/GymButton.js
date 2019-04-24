import React from 'react';
import PropTypes from 'prop-types';

import classes from './GymButton.module.css';

const GymButton = props => {
  const { children, fullWidth, onClick } = props;

  return (
    <button
      className={`${classes.container} ${fullWidth ? classes.fullWidth : ''}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

GymButton.defaultProps = {
  children: null,
  fullWidth: false,
  onClick: null,
};

GymButton.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default GymButton;
