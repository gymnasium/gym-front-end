import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from 'takeshape-routing';
import { Link } from 'gatsby';

import { GymButton, Title } from '..';

import * as CourseUtils from '../../utils/courses';
import classes from './FeaturedCourse.module.css';

const FeaturedCourse = ({ course }) => {
  const {
    courseType,
    title,
    coverImage,
    shortDescriptionHtml,
    author,
  } = course;

  const headerBackgroundStyle = {
    backgroundColor: courseType.color.hex,
  };

  const courseUrl = CourseUtils.getAboutPageUrl(course);

  return (
    <div className={classes.featuredCourseListItem}>
      <div>
        <header style={headerBackgroundStyle}>
          <b className={classes.courseType}>{courseType.displayName}</b>
          <div>
            <Link to={courseUrl} title="Learn More">
              <img
                className="img-fluid"
                alt={title}
                src={getImageUrl(coverImage.path)}
                width="256"
              />
            </Link>
          </div>
          <Title component="h2" className={classes.courseTitle}>
            {title}
          </Title>
          {/* eslint-disable react/no-danger */}
          <p
            dangerouslySetInnerHTML={{ __html: shortDescriptionHtml }}
            className={classes.shortDescription}
          />
          {/* eslint-enable react/no-danger */}
        </header>
      </div>
      <footer>
        <div>
          <dl className={classes.instructor}>
            <dt className={classes.byline}>
              <b>
                with
                {author.displayName}
              </b>
            </dt>
            <dd>{author.workplace}</dd>
          </dl>
        </div>
        <div className={classes.cardCta}>
          <Link to={courseUrl}>
            <GymButton>Learn More</GymButton>
          </Link>
        </div>
      </footer>
    </div>
  );
};

FeaturedCourse.propTypes = {
  course: PropTypes.shape({
    courseType: PropTypes.shape({}),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    courseNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    coverImage: PropTypes.shape({}),
    author: PropTypes.shape({}),
  }).isRequired,
};

export default FeaturedCourse;
