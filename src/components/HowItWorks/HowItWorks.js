import React from 'react';

import { SimpleGrid } from '@chakra-ui/core';

import { H2 } from '@gymnasium/gym-ui';

import { Microcopy } from '..';

import classes from './HowItWorks.module.css';

const HowItWorks = () => (
  <header id="how-gymnasium-works" className={classes.headerTab}>
    <H2 className="text-center">How Gymnasium Works</H2>
    <section className={classes.howItWorks}>
      <SimpleGrid spacing={8} columns={[1, 2, 4]}>
        <Microcopy title="how-it-works-1" />
        <Microcopy title="how-it-works-2" />
        <Microcopy title="how-it-works-3" />
        <Microcopy title="how-it-works-4" />
      </SimpleGrid>
    </section>
  </header>
);

export default HowItWorks;
