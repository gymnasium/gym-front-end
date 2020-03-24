import React from 'react';
import { getImageUrl } from 'takeshape-routing';
import { Link } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import { map } from 'lodash';

import * as CourseUtils from '../../utils/courses';
import { Button } from '@gymnasium/gym-ui';

import classes from './CourseList.module.css';

const CourseSummaryListItem = ({ course }) => {
  const {
    coverImage,
    title,
    courseNumber,
    shortDescriptionHtml,
    skillsCovered,
    thisCourseIsFor,
  } = course;

  const courseAboutUrl = CourseUtils.getAboutPageUrl(course);

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
              <Button fullWidth>
                <Link to={courseAboutUrl} className="gym-button">
                  <b>Learn More</b>
                </Link>
              </Button>
            </figcaption>
          </figure>
        </Col>
        <Col md={8}>
          <div className={classes.courseDescription}>
            <header>
              <h1>{title}</h1>
            </header>
            {/* eslint-disable react/no-danger */}
            {shortDescriptionHtml && (
              <p dangerouslySetInnerHTML={{ __html: shortDescriptionHtml }} />
            )}
            {/* eslint-enable react/no-danger */}
            <Row>
              <Col>
                <dl>
                  <dt>Skills Covered</dt>
                  {map(skillsCovered, ({ skill }, idx) => (
                    <dd key={`skill-covered-${idx}`}>
                      <span>{skill}</span>
                    </dd>
                  ))}
                </dl>
              </Col>

              <Col>
                <dl>
                  <dt>This course is for </dt>
                  {map(thisCourseIsFor, ({ attribute }, idx) => (
                    <dd key={`this-course-is-for-${idx}`}>
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
