import React from 'react';
import { graphql } from 'gatsby';

import { Container } from 'react-bootstrap';

import { CourseList, Layout, Microcopy } from '../../components';

const FullCourses = ({ data }) => {
  const { courses } = data.takeshape;
  return (
    <Layout>
      <Container>
        <h1>Full courses</h1>
        <Microcopy title="full-courses-description" />
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
