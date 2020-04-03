/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { Container as BootstrapContainer } from 'react-bootstrap';

const Container = ({ children, fluid, ...rest }) => {
  const isSmallViewport = useMediaQuery({ query: '(max-width: 992px)' });

  return (
    <BootstrapContainer {...rest} fluid={isSmallViewport || fluid}>
      {children}
    </BootstrapContainer>
  );
};

export default Container;
