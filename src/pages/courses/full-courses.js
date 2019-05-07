import React from 'react';
import { graphql } from 'gatsby';

import { Container, Col, Row } from 'react-bootstrap';
import { map } from 'lodash';

import { CourseList, Layout } from '../../components';

const FullCourses = ({ data }) => {
  const { courses } = data.takeshape;
  return (
    <Layout>
      <Container>
        <h1>Full courses</h1>
        <CourseList courses={courses.items} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    takeshape {
      courses: getFullCourseList {
        items {
          title
          syllabus
          courseNumber
          descriptionHtml
          shortDescription
          courseUrlSuffix
        }
      }
    }
  }
`;

export default FullCourses;
