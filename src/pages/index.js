import React from 'react';
import { graphql, Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import {
  AsSeenIn,
  FeaturedCourseSection,
  FindWork,
  Hero,
  HowItWorks,
  Layout,
  SEO,
} from '../components';

import classes from './HomePage.module.css';

const IndexPage = ({ data }) => {
  const {
    asSeenIn,
    courses,
    siteSettings: { isTwitchChannelActive },
  } = data.takeshape;

  return (
    <Layout isFullWidthLayout>
      <SEO title="Home" />
      <Hero isTwitchChannelActive={isTwitchChannelActive} />
      <Container className={classes.container}>
        <Link to="/logout">Log out via Gatsby Link Component</Link>
        <HowItWorks />
        <FeaturedCourseSection courses={courses} />
        <FindWork />
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

export default IndexPage;
