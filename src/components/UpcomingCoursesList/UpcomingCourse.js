import React from 'react';
import PropTypes from 'prop-types';

import classes from './UpcomingCourse.module.css';

const UpcomingCourse = ({ course }) => {
  if (!course) return null;

  return (
    <section className={classes.upcomingCourseContainer}>
      {course.title && <h3>{course.title}</h3>}

      {course.shortDescription && <p>{course.shortDescription}</p>}
    </section>
  );
};

UpcomingCourse.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string,
    shortDescription: PropTypes.string,
  }),
};

export default UpcomingCourse;
