import React from 'react';

import { Heading } from '@chakra-ui/core';
import { H1 } from '@gymnasium/gym-ui';

import { Layout, SEO } from '../../components';

const HelpPage = () => {
  return (
    <Layout>
      <SEO title="Help" />
      <Heading as={H1} textAlign="left">
        Help
      </Heading>
    </Layout>
  );
};

export default HelpPage;
