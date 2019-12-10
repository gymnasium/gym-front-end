import React from 'react';
import { graphql } from 'gatsby';
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

import * as actions from '../store/counter';

import classes from './HomePage.module.css';

const IndexPage = ({ data }) => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const reset = () => {
    dispatch(actions.reset());
  };

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
        <h1>{counter}</h1>
        <button type="button" onClick={decrement}>
          Decrement
        </button>
        <button type="button" onClick={increment}>
          Increment
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
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
