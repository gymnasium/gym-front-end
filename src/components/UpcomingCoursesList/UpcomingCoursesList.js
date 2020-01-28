import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import UpcomingCourse from './UpcomingCourse';

const UpcomingCoursesList = props => {
  const { data } = props;
  const { courses } = data.takeshape;

  return (
    <>
      <h2>Upcoming Courses</h2>
      {courses.items.map(course => (
        <UpcomingCourse course={course} key={course._id} />
      ))}
    </>
  );
};

UpcomingCoursesList.propTypes = {
  data: PropTypes.shape({
    takeshape: PropTypes.shape({
      courses: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            shortDescription: PropTypes.string,
          })
        ),
      }),
    }),
  }),
};

export const query = graphql`
  {
    takeshape {
      courses: getUpcomingCourseList {
        items {
          title
          shortDescription
          _id
        }
      }
    }
  }
`;

const UpcomingCoursesStaticPage = props => (
  <StaticQuery
    query={query}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={data => <UpcomingCoursesList data={data} {...props} />}
  />
);

export default UpcomingCoursesStaticPage;
