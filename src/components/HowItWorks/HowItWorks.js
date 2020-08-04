import React from 'react';

import { SimpleGrid, useTheme } from '@chakra-ui/core';
import { Container } from 'react-bootstrap';

import { H1 } from '@gymnasium/gym-ui';

import { Microcopy, TabbedContainer } from '..';

import classes from './HowItWorks.module.css';

const HowItWorks = () => {
  const theme = useTheme();
  return (
    <TabbedContainer
      title="How Gymnasium Works"
      background={theme.colors.gymnasium.lightPageBackground}
    >
      <Container className={classes.howItWorks}>
        <SimpleGrid spacing={8} columns={[1, 2, 4]}>
          <Microcopy title="how-it-works-1" />
          <Microcopy title="how-it-works-2" />
          <Microcopy title="how-it-works-3" />
          <Microcopy title="how-it-works-4" />
        </SimpleGrid>
      </Container>
    </TabbedContainer>
  );
};

export default HowItWorks;
