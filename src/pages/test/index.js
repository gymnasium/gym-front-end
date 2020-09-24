import React from 'react';

import { Box, Text, useTheme } from '@chakra-ui/core';

import { Layout } from '../../components';

const TestPage = props => {
  const theme = useTheme();

  return (
    <Layout>
      <Box>
        <Text fontSize="xl" color={theme.colors.orange[400]}>
          Hello World
        </Text>
      </Box>
    </Layout>
  );
};

export default TestPage;
