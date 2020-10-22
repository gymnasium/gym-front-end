import React from 'react';
import { Box } from '@chakra-ui/core';

const FullBleed = ({ children, ...rest }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Box className="full-bleed" {...rest}>
      {children}
    </Box>
  );
};

export default FullBleed;
