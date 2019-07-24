import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { getImageUrl } from 'takeshape-routing';
import { map } from 'lodash';

import { GymButton, Layout } from '../../components';

import classes from './CourseAboutPage.module.css';

const CourseAboutPage = ({ pageContext }) => {
  const { course } = pageContext;
  if (!course) return;

  const { courseType } = course;

  const styles = {
    pageHeaderContainer: {
      backgroundColor: courseType && courseType.color && courseType.color.hex,
    },
  };

  return (
    <Layout classes={{ contentWrapper: classes.contentWrapper }}>
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
          <span className={classes.courseTypeLabel}>Full Course</span>
        </Col>
        <Col className="text-center">
          <GymButton>Get Started</GymButton>
        </Col>
        <Col />
      </Row>
      <Row className={classes.mainContentContainer}>
        <Col xs={12} md={9}>
          <div
            className={classes.shortDescription}
            dangerouslySetInnerHTML={{ __html: course.shortDescriptionHtml }}
          />
          <hr />
          <h2>
            <strong>Course Preview</strong>
          </h2>
          <iframe
            width="100%"
            height="425"
            src="https://www.youtube.com/embed/1x1rw5MlI3k?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div dangerouslySetInnerHTML={{ __html: course.descriptionHtml }} />
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
          <div
            className={classes.authorBio}
            dangerouslySetInnerHTML={{ __html: course.author.bioHtml }}
          />
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
  }),
};

export default CourseAboutPage;
