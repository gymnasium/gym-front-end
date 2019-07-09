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
  const { asSeenIn, courses } = data.takeshape;
  return (
    <Layout>
      <SEO title="Home" />
      <Container className={classes.container}>
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
          shortDescription
        }
      }
    }
  }
`;

export default IndexPage;
