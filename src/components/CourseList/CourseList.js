import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import classes from './CourseList.module.css';
import CourseSummaryListItem from './CourseSummaryListItem';

const CourseList = ({ courses }) => {
  return (
    <ul className={classes.courseList}>
      {map(courses, course => {
        console.log('course list');
        console.log(courses);
        return <CourseSummaryListItem key={course._id} course={course} />;
      })}
    </ul>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({})),
};

export default CourseList;
