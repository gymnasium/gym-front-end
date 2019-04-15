import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';

const CourseAboutPage = ({ data }) => {
  debugger;
  const { course } = data.takeshape;
  return (
    <Layout>
      <h1>{course.title}</h1>
    </Layout>
  );
};

export const query = graphql`
  query($id: ID!) {
    takeshape {
      course: getFullCourse(_id: $id) {
        title
        syllabus
        courseNumber
        descriptionHtml
        shortDescription
        courseUrlSuffix
      }
    }
  }
`;

export default CourseAboutPage;
