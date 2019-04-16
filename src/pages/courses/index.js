import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';

const CoursesPage = ({ data }) => {
  const courses = data.takeshape.courses.items;

  return (
    <Layout>
      <ul>
        {courses.map(course => {
          return (
            <li>
              {course.title}
              <pre>{JSON.stringify(course)}</pre>
            </li>
          );
        })}
      </ul>
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

export default CoursesPage;
