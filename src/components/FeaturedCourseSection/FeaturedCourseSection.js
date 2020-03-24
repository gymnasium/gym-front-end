import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@gymnasium/gym-ui';

import { FeaturedCourse, Microcopy, Title } from '..';

import classes from './FeaturedCourseSection.module.css';

const FeaturedCourseSection = ({ courses }) => {
  if (!courses) return null;

  return (
    <>
      <header className={classes.featuredCoursesTitleContainer}>
        <Title>Featured Courses</Title>
      </header>
      <section id="featured-courses" className={classes.featuredCourses}>
        <Row>
          <Col>
            <ul>
              {courses.items.map(course => (
                <li key={`featured-course-${course._id}`}>
                  <FeaturedCourse course={course} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 10, offset: 1 }}>
            <Microcopy
              component="p"
              class={classes.viewCoursesPrompt}
              title="home-page-view-courses-prompt"
            />
            <div className="text-center">
              <Link to="/courses">
                <Button>View all courses</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

FeaturedCourseSection.propTypes = {
  courses: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

export default FeaturedCourseSection;
