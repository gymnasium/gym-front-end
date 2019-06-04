import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';

import {
  AsSeenIn,
  FeaturedCourseSection,
  FindWork,
  HowItWorks,
  Layout,
  SEO,
} from '../components';

import classes from './HomePage.module.css';

const IndexPage = ({ data }) => {
  const { courses } = data.takeshape;
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid>
        <Container className={classes.container}>
          <HowItWorks />
          <FeaturedCourseSection courses={courses} />
          <FindWork />
          <AsSeenIn />
        </Container>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    takeshape {
      courses: getFullCourseList {
        items {
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
        }
      }
    }
  }
`;

export default IndexPage;
