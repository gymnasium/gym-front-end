import React from 'react';

import { Flex, useTheme } from '@chakra-ui/core';
import { TwitchHero } from './TwitchHero';

const Hero = ({ isTwitchChannelActive }) => {
  const theme = useTheme();

  if (isTwitchChannelActive) return <TwitchHero />;

  return (
    <Flex
      backgroundColor="#d73158"
      marginLeft="-15px"
      minHeight="325px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      color={theme.colors.white}
    />
  );
};

export default Hero;
