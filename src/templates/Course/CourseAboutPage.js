import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components';

const CourseAboutPage = ({ data }) => {
  debugger;
  const { course } = data.takeshape;
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>{course.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: course.descriptionHtml }} />
          </div>
        </div>
      </div>
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
