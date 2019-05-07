import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { Container, Col, Row } from 'react-bootstrap';

import classes from './CourseList.module.css';
import CourseSummaryListItem from './CourseSummaryListItem';

const CourseList = ({ courses }) => {
  return (
    <ul className={classes.courseList}>
      {map(courses, course => (
        <CourseSummaryListItem course={course} />
      ))}
    </ul>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({})),
};

export default CourseList;
