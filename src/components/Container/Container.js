/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { Box } from '@chakra-ui/core';

const Container = ({ children, fluid, ...rest }) => {
  const isSmallViewport = useMediaQuery({ query: '(max-width: 992px)' });

  const maxWidth = fluid || isSmallViewport ? '100vw' : '1170px';

  return (
    <Box maxWidth={maxWidth} {...rest} ml="auto" mr="auto">
      {children}
    </Box>
  );
};

export default Container;
