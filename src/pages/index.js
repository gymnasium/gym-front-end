import React from 'react';
import { graphql } from 'gatsby';

import { Box, useTheme } from '@chakra-ui/core';

import {
  AsSeenIn,
  Container,
  FeaturedCourseSection,
  FindWork,
  Hero,
  HowItWorks,
  Layout,
  SEO,
} from '../components';

const HomePage = ({ data }) => {
  const {
    asSeenIn,
    courses,
    siteSettings: { isTwitchChannelActive },
  } = data.takeshape;

  const theme = useTheme();

  return (
    <Layout isFullWidthLayout>
      <SEO title="Home" />
      <Hero isTwitchChannelActive={isTwitchChannelActive} />
      <HowItWorks />
      <FeaturedCourseSection courses={courses} />

      <Container
        style={{ backgroundColor: theme.colors.gymnasium.darkGray }}
        fluid
      >
        <Container>
          <Box width={['100%', 10 / 12]} margin="auto">
            <FindWork />
          </Box>
        </Container>
      </Container>
      <Container>
        <AsSeenIn items={asSeenIn.items} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    takeshape {
      siteSettings: getSiteSettings {
        isTwitchChannelActive
      }
      asSeenIn: getAsSeenInList {
        items {
          _id
          url
          order
          publicationLogo {
            title
            path
          }
        }
      }
      courses: getFullCourseList {
        items {
          _id
          author {
            displayName
            workplace
            photo {
              path
            }
          }
          title
          descriptionHtml
          courseNumber
          courseType {
            displayName
            color {
              hex
            }
          }
          coverImage {
            path
          }
          shortDescriptionHtml
        }
      }
    }
  }
`;

export default HomePage;
