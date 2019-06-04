import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import { FeaturedCourse, GymButton, Microcopy } from '..';

import classes from './FeaturedCourseSection.module.css';

const FeaturedCourseSection = ({ courses }) => (
  <section id="featured-courses" className={classes.featuredCourses}>
    <ul>
      {courses &&
        courses.items.map(course => (
          <FeaturedCourse key={course._id} course={course} />
        ))}
    </ul>
    <Row>
      <Col>
        <Microcopy title="home-page-view-courses-prompt" />
        <GymButton>View all Courses</GymButton>
      </Col>
    </Row>
  </section>
);

FeaturedCourseSection.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FeaturedCourseSection;
