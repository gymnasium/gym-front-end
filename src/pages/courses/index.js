import React from 'react';
import { graphql } from 'gatsby';

import { Container, Col, Row } from 'react-bootstrap';
import { CourseList, Layout } from '../../components';

import classes from './Courses.module.css';

const CoursesPage = ({ data }) => {
  const courses = data.takeshape.courses;

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
                  <CourseList courses={courses.items} />
                </section>
                <section>
                  <h1 id="gym-shorts">Gym Shorts</h1>
                  <CourseList />
                </section>
                <section>
                  <h1 id="take-5">Take 5</h1>
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
      courses: getFullCourseList {
        items {
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
