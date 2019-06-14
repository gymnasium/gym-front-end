import React from 'react';
import PropTypes from 'prop-types';

import classes from './Title.module.css';

const Title = ({
  component: Component = 'h1',
  children,
  className,
  ...rest
}) => {
  return (
    <Component className={`${className || ''} ${classes.title}`} {...rest}>
      {children}
    </Component>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  className: PropTypes.string,
};

export default Title;
