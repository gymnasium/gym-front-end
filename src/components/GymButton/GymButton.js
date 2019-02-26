import React from 'react';
import PropTypes from 'prop-types';

import './GymButton.module.css';

const GymButton = props => {
  const { children } = props;

  return (
    <button className='container' type='button'>
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
