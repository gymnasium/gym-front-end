import React from 'react';

import { Box, Grid, Heading, Stack, Text, useTheme } from '@chakra-ui/core';

import { H1, H2 } from '@gymnasium/gym-ui';

import { Container, FullBleed, Layout } from '../../components';

const Take5HubPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <FullBleed>
        <Box backgroundColor="#bbb" padding="1rem 0">
          <Container>
            <Heading as={H1} textAlign="left">
              Take 5
            </Heading>
            <Text as="p" fontSize="1.1rem">
              <Text as="strong" display="block">
                Learn a new skill in 5 minutes.
              </Text>
              Video tutorials on accessibility, career skills, prototyping, user
              experience, and web design and development.
            </Text>
          </Container>
        </Box>

        <Grid gridTemplateColumns="2fr 1fr">
          <Stack>
            <Heading as={H2} textAlign="left">
              Recent
            </Heading>
            <Box>featured take5</Box>
          </Stack>

          <Stack>
            <Heading as={H2} textAlign="left">
              Topics
            </Heading>
          </Stack>
        </Grid>
      </FullBleed>
    </Layout>
  );
};

export default Take5HubPage;
