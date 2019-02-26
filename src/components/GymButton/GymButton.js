import React from 'react';
import PropTypes from 'prop-types';

import classes from './GymButton.module.css';

const GymButton = props => {
  const { children } = props;

  console.dir('classes are', classes);

  return (
    <button className={classes.container} type='button'>
      {children}
    </button>
  );
};

GymButton.defaultProps = {
  children: null,
};

GymButton.propTypes = {
  children: PropTypes.node,
};

export default GymButton;
