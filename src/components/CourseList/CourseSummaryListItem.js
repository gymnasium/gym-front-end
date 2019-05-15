import React from 'react';
import { getImageUrl } from 'takeshape-routing';
import { Link } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import { map } from 'lodash';

import CONSTANTS from '../../utils/constants';
import { GymButton } from '../';

import classes from './CourseList.module.css';

const CourseSummaryListItem = ({ course }) => {
  const {
    coverImage,
    title,
    courseNumber,
    skillsCovered,
    thisCourseIsFor,
  } = course;
  console.dir('course is', course);

  const courseAboutUrl = `${CONSTANTS.URLS.COURSES.LIST}${courseNumber}/about`;

  return (
    <li className={classes.courseContainer} data-course-id={courseNumber}>
      <Row>
        <Col md={4}>
          <figure>
            {coverImage && (
              <Link to={courseAboutUrl}>
                <img
                  className="img-fluid"
                  src={getImageUrl(coverImage.path)}
                  alt={`Course ${courseNumber} - ${title}`}
                />
              </Link>
            )}
            <figcaption>
              <GymButton fullWidth>
                <Link to={courseAboutUrl} className="gym-button">
                  <b>Learn More</b>
                </Link>
              </GymButton>
            </figcaption>
          </figure>
        </Col>
        <Col md={8}>
          <div className="course-description">
            <header>
              <h1>{title}</h1>
            </header>
            <p>
              Learn HTML and CSS and become the Web Designer that Developers
              love. Professional design experience is a prerequisite, but no
              prior web or coding experience is necessary.
            </p>
            <Row>
              <Col>
                <dl>
                  <dt>Skills Covered</dt>
                  {map(skillsCovered, ({ skill }) => (
                    <dd>
                      <span>{skill}</span>
                    </dd>
                  ))}
                </dl>
              </Col>

              <Col>
                <dl>
                  <dt>This course is for </dt>
                  {map(thisCourseIsFor, ({ attribute }) => (
                    <dd>
                      <span>{attribute}</span>
                    </dd>
                  ))}
                </dl>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </li>
  );
};

export default CourseSummaryListItem;
