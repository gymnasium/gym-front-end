import React from 'react';

import { Heading } from '@chakra-ui/core';
import { H1 } from '@gymnasium/gym-ui';

import { Layout, SEO } from '../../components';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Heading as={H1} textAlign="left">
        Contact
      </Heading>
    </Layout>
  );
};

export default ContactPage;
