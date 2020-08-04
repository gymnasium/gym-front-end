import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '@gymnasium/gym-ui';

import { Box, PseudoBox, Text, useTheme } from '@chakra-ui/core';

const classes = {};

const TabbedContainer = ({ backgroundColor, children, title, ...rest }) => {
  const theme = useTheme();

  return (
    <PseudoBox
      as="header"
      textAlign="center"
      backgroundColor={
        backgroundColor || theme.colors.gymnasium.lightPageBackground
      }
      paddingBottom={theme.space[8]}
      _before={{
        display: 'table',
        content: `' '`,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <PseudoBox
        marginTop={`-${theme.space[5]}`}
        display="inline-block"
        marginBottom={theme.space[4]}
        _before={{
          display: 'inline-block',
          width: '100%',
          height: '0',
          content: `' '`,
          lineHeight: 0,
          paddingRight: '1rem',
          paddingLeft: '1rem',

          boxSizing: 'border-box',
          verticalAlign: 'top',
          position: 'relative',
          zIndex: 100,
          color: backgroundColor || theme.colors.gymnasium.lightPageBackground,
          borderBottom: `1.4em solid ${
            backgroundColor || theme.colors.gymnasium.lightPageBackground
          }`,
          borderRight: '1.4em dashed transparent',
          borderLeft: '1.4em dashed transparent',
        }}
      >
        <Text as="span" padding="0 1rem" display="inline-block">
          <H2>{title}</H2>
        </Text>
      </PseudoBox>
      <Box className={classes.howItWorks} textAlign="left">
        {children}
      </Box>
    </PseudoBox>
  );
};

TabbedContainer.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node,
};

export default TabbedContainer;
