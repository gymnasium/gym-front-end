import React from 'react';

import { Heading } from '@chakra-ui/core';
import { H1 } from '@gymnasium/gym-ui';

import { Layout } from '../../components';

const HonorPage = () => {
  return (
    <Layout>
      <Heading as={H1} textAlign="left">
        Honor
      </Heading>
    </Layout>
  );
};

export default HonorPage;
