import React from 'react';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';

import { FeaturedCourse, GymButton, Layout, SEO } from '../components';

import classes from './HomePage.module.css';

const IndexPage = ({ data }) => {
  const { courses } = data.takeshape;
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid>
        <Container className={classes.container}>
          <Row>
            <Col>
              <GymButton>Hello</GymButton>
              <h1>test</h1>
            </Col>
          </Row>

          <section id="featured-courses" className={classes.featuredCourses}>
            <ul>
              {courses.items.map(course => (
                <FeaturedCourse key={course._id} course={course} />
              ))}
            </ul>
          </section>
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
