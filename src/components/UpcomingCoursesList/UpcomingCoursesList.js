import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { UpcomingCourse } from '.';

const UpcomingCoursesList = props => {
  const { courses } = props.data.takeshape;

  return (
    <React.Fragment>
      <h2>Upcoming Courses</h2>
      {courses.items.map(course => (
        <UpcomingCourse course={course} key={course._id} />
      ))}
    </React.Fragment>
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

export default props => (
  <StaticQuery
    query={query}
    render={data => <UpcomingCoursesList data={data} {...props} />}
  />
);
