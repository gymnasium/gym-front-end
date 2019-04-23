import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from 'takeshape-routing';

const FeaturedCourse = ({ course }) => {
  const {
    courseType,
    title,
    coverImage,
    subtitle,
    author,
    courseNumber,
  } = course;

  const courseUrl = `/courses/${courseNumber}`;

  return (
    <li>
      <div className="card featured-course user-experience">
        <div className="card-main equal-h">
          <header>
            <b className="course-type">{courseType.displayName}</b>
            <div className="mask">
              <a href={courseUrl} title="Learn More">
                <img
                  alt={title}
                  src={getImageUrl(coverImage.path)}
                  width="256"
                />
              </a>
            </div>
            <h2>
              <a href={courseUrl} title="Learn More">
                {title}
              </a>
            </h2>
            <p>{subtitle}</p>
          </header>
        </div>
        <div className="card-footer">
          <div className="card-info">
            <dl className="instructor">
              <dt className="byline">
                <b>with {author.displayName}</b>
              </dt>
              <dd>{author.workplace}</dd>
            </dl>
          </div>
          <div className="card-cta">
            <a className="gym-button" href={courseUrl}>
              <b>Learn More</b>
            </a>
          </div>
        </div>
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
