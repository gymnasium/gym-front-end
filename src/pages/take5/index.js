import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Box,
  Grid,
  Heading,
  PseudoBox,
  Stack,
  Text,
  useTheme,
} from '@chakra-ui/core';

import { H1, H2, H3 } from '@gymnasium/gym-ui';

import { Container, FullBleed, Layout } from '../../components';
import { getUrlFromTitle } from '../../utils/urlUtils';

const Take5HubPage = () => {
  const theme = useTheme();

  const data = useStaticQuery(graphql`
    query Take5Query {
      takeshape {
        getTake5List(sort: { field: "courseNumber", order: "desc" }) {
          items {
            _createdAt
            _enabledAt
            author {
              displayName
            }
            title
            courseType {
              displayName
              _id
            }
            courseNumber
          }
        }
        getCourseTypeList(sort: { field: "displayName", order: "asc" }) {
          items {
            displayName
            _id
          }
        }
      }
    }
  `);

  const take5List = data.takeshape.getTake5List.items;
  const topicList = data.takeshape.getCourseTypeList.items;

  const backToTopLink = (
    <a href="#main">
      <PseudoBox
        display="inline-block"
        as="b"
        _before={{
          display: 'inline-block',
          content: '"↑"',
          fontFamily: 'monospace, monospace',
          verticalAlign: 'baseline',
          marginRight: '.25em',
        }}
      >
        Back to top
      </PseudoBox>
    </a>
  );

  return (
    <Layout>
      <FullBleed>
        <Box backgroundColor="#bbb" padding="1rem 0" id="main">
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
      </FullBleed>
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
          {topicList.map(topic => (
            <a
              key={`topic-link-${topic._id}`}
              href={`#${getUrlFromTitle(topic.displayName)}`}
            >
              {topic.displayName}
            </a>
          ))}
        </Stack>
      </Grid>

      <FullBleed>
        {topicList.map(topic => (
          <Box
            borderTop={`1px dashed ${theme.colors.gymnasium.gray}`}
            backgroundColor={theme.colors.gymnasium.lightPageBackground}
            key={`topic-section-${topic._id}`}
            padding="1rem 0"
          >
            <Container>
              <Box>
                <Heading
                  textTransform="uppercase"
                  fontSize="1.5rem"
                  padding="1rem 0"
                  as={H3}
                >
                  {topic.displayName}
                </Heading>
                {backToTopLink}
              </Box>
            </Container>
          </Box>
        ))}
      </FullBleed>
    </Layout>
  );
};

export default Take5HubPage;
