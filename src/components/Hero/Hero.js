import React from 'react';

import { Flex, useTheme } from '@chakra-ui/core';
import { TwitchHero } from './TwitchHero';

import { Container } from '..';

const Hero = ({ isTwitchChannelActive }) => {
  const theme = useTheme();

  if (isTwitchChannelActive) return <TwitchHero />;

  return (
    <Container fluid backgroundColor="#d73158" minHeight="325px">
      <Container>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          color={theme.colors.white}
        >
          Hello, world.
        </Flex>
      </Container>
    </Container>
  );
};

export default Hero;
