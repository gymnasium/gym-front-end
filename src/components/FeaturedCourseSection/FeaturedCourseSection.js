import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Col, Row } from 'react-bootstrap';

import { FeaturedCourse, GymButton, Microcopy, Title } from '..';

import classes from './FeaturedCourseSection.module.css';

const FeaturedCourseSection = ({ courses }) => {
  if (!courses) return null;

  return (
    <React.Fragment>
      <header className={classes.featuredCoursesTitleContainer}>
        <Title>Featured Courses</Title>
      </header>
      <section id="featured-courses" className={classes.featuredCourses}>
        <ul>
          {courses.items.map(course => (
            <FeaturedCourse key={course._id} course={course} />
          ))}
        </ul>
        <Row>
          <Col>
            <Microcopy title="home-page-view-courses-prompt" />

            <Link to="/courses">
              <GymButton>View all Courses</GymButton>
            </Link>
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

FeaturedCourseSection.propTypes = {
  courses: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

export default FeaturedCourseSection;
