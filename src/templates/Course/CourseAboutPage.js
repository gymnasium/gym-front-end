import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { getImageUrl } from 'takeshape-routing';
import { map } from 'lodash';

import { GymButton, Layout, SEO } from '../../components';

import classes from './CourseAboutPage.module.css';

const CourseAboutPage = ({ pageContext }) => {
  const { course } = pageContext;
  if (!course) return null;

  const { courseType } = course;

  const styles = {
    pageHeaderContainer: {
      backgroundColor: courseType && courseType.color && courseType.color.hex,
    },
  };

  let courseTypeDisplay;
  if (course.courseNumber >= 0 && course.courseNumber < 100) {
    courseTypeDisplay = 'Gym Short';
  } else if (course.courseNumber >= 100 && course.courseNumber <= 5000) {
    courseTypeDisplay = 'Full Course';
  } else {
    courseTypeDisplay = 'Take 5';
  }

  return (
    <Layout classes={{ contentWrapper: classes.contentWrapper }}>
      <SEO title={`About ${course.title}`} />
      <Row>
        <Col
          className={classes.pageHeaderContainer}
          style={styles.pageHeaderContainer}
        >
          <img
            className="img-fluid"
            alt={course.title}
            src={getImageUrl(course.coverImage.path)}
            width="256"
          />
          <h1>{course.title}</h1>
        </Col>
      </Row>
      <Row className={classes.getStartedBarContainer}>
        <Col className="my-auto">
          <span className={classes.courseTypeLabel}>{courseTypeDisplay}</span>
        </Col>
        <Col className="text-center">
          <GymButton>Get Started</GymButton>
        </Col>
        <Col />
      </Row>
      <Row className={classes.mainContentContainer}>
        <Col xs={12} md={9}>
          {/* eslint-disable react/no-danger */}
          <div
            className={classes.shortDescription}
            dangerouslySetInnerHTML={{ __html: course.shortDescriptionHtml }}
          />
          {/* eslint-enable react/no-danger */}
          <hr />
          {course.coursePreviewVideoUrl && (
            <>
              <h2>
                <strong>Course Preview</strong>
              </h2>
              <iframe
                title={`About ${course.title} video`}
                width="100%"
                height="425"
                src={course.coursePreviewVideoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </>
          )}

          {/* eslint-disable react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: course.descriptionHtml }} />
          {/* eslint-enable react/no-danger */}
        </Col>
        <Col>
          <h2>
            <strong>This course is for</strong>
          </h2>
          <ul>
            {map(course.thisCourseIsFor, ({ attribute }, idx) => (
              <li key={`this-course-is-for-${idx}`}>
                <span>{attribute}</span>
              </li>
            ))}
          </ul>

          <h2>Meet the instructor</h2>
          {course.author && course.author.photo && (
            <img
              className="img-fluid"
              alt={course.author.displayName}
              src={getImageUrl(course.author.photo.path)}
            />
          )}
          <h3 className={classes.authorName}>{course.author.displayName}</h3>
          {/* eslint-disable react/no-danger */}
          <div
            className={classes.authorBio}
            dangerouslySetInnerHTML={{ __html: course.author.bioHtml }}
          />
          {/* eslint-enable react/no-danger */}
        </Col>
      </Row>
    </Layout>
  );
};

CourseAboutPage.propTypes = {
  pageContext: PropTypes.shape({
    course: PropTypes.shape({
      courseType: PropTypes.shape({
        color: PropTypes.shape({
          hex: PropTypes.string,
        }),
      }),
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default CourseAboutPage;
