import React from 'react';
import PropTypes from 'prop-types';

import classes from './GymButton.module.css';

const GymButton = props => {
  const {
    children,
    onClick,
  } = props;

  console.log('onclick', onClick);

  return (
    <button
      className={classes.container}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

GymButton.defaultProps = {
  children: null,
  onClick: null,
};

GymButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default GymButton;
