import React from 'react';
import { graphql } from 'gatsby';

import { Container, Col, Row } from 'react-bootstrap';
import { CourseList, Layout, Microcopy } from '../../components';

import classes from './Courses.module.css';

const CoursesPage = ({ data }) => {
  const { fullCourses } = data.takeshape;

  return (
    <Layout>
      <div className={classes.pageContainer}>
        <Container>
          <nav>
            <a href="#full-courses">Full Courses</a>
            <a href="#gym-shorts">Gym Shorts</a>
            <a href="#take-5">Take 5</a>
          </nav>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className={classes.courseListContainer}>
                <section>
                  <h1 id="full-courses">Full Courses</h1>
                  <Microcopy title="full-courses-description" />
                  <CourseList courses={fullCourses.items} />
                </section>
                <section>
                  <h1 id="gym-shorts">Gym Shorts</h1>
                  <Microcopy title="full-courses-description" />
                  <CourseList />
                </section>
                <section>
                  <h1 id="take-5">Take 5</h1>
                  <Microcopy title="take-five-description" />
                  <CourseList />
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    takeshape {
      fullCourses: getFullCourseList {
        items {
          _id
          courseNumber
          courseUrlSuffix
          coverImage {
            path
          }
          descriptionHtml
          shortDescription
          skillsCovered {
            skill
          }
          syllabus
          thisCourseIsFor {
            attribute
          }
          title
        }
      }
    }
  }
`;

export default CoursesPage;
