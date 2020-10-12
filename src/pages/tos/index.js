import React from 'react';

import { Heading } from '@chakra-ui/core';
import { H1 } from '@gymnasium/gym-ui';

import { Layout, SEO } from '../../components';

const ToSPage = () => {
  return (
    <Layout>
      <SEO title="Terms of Service" />
      <Heading as={H1} textAlign="left">
        Terms of Service
      </Heading>
    </Layout>
  );
};

export default ToSPage;
