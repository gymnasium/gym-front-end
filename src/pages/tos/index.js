import React from 'react';

import { Heading } from '@chakra-ui/core';
import { H1 } from '@gymnasium/gym-ui';

import { Layout } from '../../components';

const ToSPage = () => {
  return (
    <Layout>
      <Heading as={H1} textAlign="left">
        Terms of Service
      </Heading>
    </Layout>
  );
};

export default TosPage;
