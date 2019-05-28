import React from 'react';
import { graphql } from 'gatsby';

import { Container, Col, Row } from 'react-bootstrap';
import {
  CourseList,
  Layout,
  Microcopy,
  UpcomingCoursesList,
} from '../../components';

import classes from './Courses.module.css';

const CoursesPage = ({ data }) => {
  const { fullCourses } = data.takeshape;

  return (
    <Layout>
      <div className={classes.pageContainer}>
        <Container>
          <nav className={classes.subnav}>
            <a href="#full-courses">Full Courses</a>
            <a href="#gym-shorts">Gym Shorts</a>
            <a href="#take-5">Take 5</a>
          </nav>
        </Container>
        <Container>
          <div className={classes.pageContentContainer}>
            <Row>
              <Col className={classes.courseListColumn}>
                <section>
                  <h1 id="full-courses">Full Courses</h1>
                  <Microcopy
                    title="full-courses-description"
                    className={classes.courseTypeDescription}
                  />
                  <CourseList courses={fullCourses.items} />
                </section>
                <section>
                  <h1 id="gym-shorts">Gym Shorts</h1>
                  <Microcopy
                    title="full-courses-description"
                    className={classes.courseTypeDescription}
                  />
                  <CourseList />
                </section>
                <section>
                  <h1 id="take-5">Take 5</h1>
                  <Microcopy
                    title="take-five-description"
                    className={classes.courseTypeDescription}
                  />
                  <CourseList />
                </section>
              </Col>
              <Col md={3} className={classes.rightHandColumn}>
                <UpcomingCoursesList />
              </Col>
            </Row>
          </div>
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
