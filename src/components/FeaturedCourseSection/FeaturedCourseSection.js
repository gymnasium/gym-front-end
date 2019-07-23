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
        <Row>
          {courses.items.map(course => (
            <Col
              className="p-0"
              xs={6}
              md={4}
              lg={3}
              key={`featured-course-${course._id}`}
            >
              <FeaturedCourse course={course} />
            </Col>
          ))}
        </Row>
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
