import React from 'react';

import { Heading } from '@chakra-ui/core';
import { H1 } from '@gymnasium/gym-ui';

import { Layout } from '../../components';

const CsrPolicyPage = () => {
  return (
    <Layout>
      <Heading as={H1} textAlign="left">
        CSR Policy
      </Heading>
    </Layout>
  );
};

export default CsrPolicyPage;
