import React from 'react';

import { Heading } from '@chakra-ui/core';
import { H1 } from '@gymnasium/gym-ui';

import { Layout, SEO } from '../../components';

const HonorPage = () => {
  return (
    <Layout>
      <SEO title="Honor Policy" />
      <Heading as={H1} textAlign="left">
        Honor
      </Heading>
    </Layout>
  );
};

export default HonorPage;
