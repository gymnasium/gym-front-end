import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from 'takeshape-routing';

import { GymButton, Title } from '../';

import classes from './FeaturedCourse.module.css';

const FeaturedCourse = ({ course }) => {
  const {
    courseType,
    title,
    coverImage,
    shortDescription,
    author,
    courseNumber,
  } = course;

  const courseUrl = `/courses/${courseNumber}`;

  const headerBackgroundStyle = {
    backgroundColor: courseType.color.hex,
  };

  return (
    <li className={classes.featuredCourseListItem}>
      <div>
        <div>
          <header style={headerBackgroundStyle}>
            <b className={classes.courseType}>{courseType.displayName}</b>
            <div>
              <a href={courseUrl} title="Learn More">
                <img
                  alt={title}
                  src={getImageUrl(coverImage.path)}
                  width="256"
                />
              </a>
            </div>
            <h2>
              <Title className={classes.courseTitle}>{title}</Title>
            </h2>
            <p className={classes.shortDescription}>{shortDescription}</p>
          </header>
        </div>
        <footer>
          <div>
            <dl className={classes.instructor}>
              <dt className={classes.byline}>
                <b>with {author.displayName}</b>
              </dt>
              <dd>{author.workplace}</dd>
            </dl>
          </div>
          <div className={classes.cardCta}>
            <a href={courseUrl}>
              <GymButton>Learn More</GymButton>
            </a>
          </div>
        </footer>
      </div>
    </li>
  );
};

FeaturedCourse.propTypes = {
  course: PropTypes.shape({
    courseType: PropTypes.shape({}),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    courseNumber: PropTypes.number,
    coverImage: PropTypes.shape({}),
    author: PropTypes.shape({}),
  }).isRequired,
};

export default FeaturedCourse;
