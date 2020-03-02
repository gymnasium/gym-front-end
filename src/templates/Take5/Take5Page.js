import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Col, Row } from 'react-bootstrap';
import { getImageUrl } from 'takeshape-routing';
import { map } from 'lodash';

import { GymButton, Layout, SEO } from '../../components';

import classes from './Take5Page.module.css';

const Take5Page = ({ data, pageContext }) => {
  const { id } = pageContext;

  const { take5 } = data.takeshape;
  if (!take5) return null;

  const { take5Type } = take5;

  const styles = {
    pageHeaderContainer: {
      backgroundColor: take5Type && take5Type.color && take5Type.color.hex,
    },
  };

  return (
    <Layout classes={{ contentWrapper: classes.contentWrapper }}>
      <SEO title={`About ${take5.title}`} />
      <Row>
        <Col
          className={classes.pageHeaderContainer}
          style={styles.pageHeaderContainer}
        >
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${take5.videoUrl}?feature=oembed`}
            frameBorder="0"
            allowFullScreen
            title="take5"
          />
          <h1>{take5.title}</h1>
        </Col>
      </Row>
      <Row className={classes.mainContentContainer}>
        <Col xs={12} md={9}>
          {/* eslint-disable react/no-danger */}
          <div
            className={classes.shortDescription}
            dangerouslySetInnerHTML={{ __html: take5.shortDescriptionHtml }}
          />
          {/* eslint-enable react/no-danger */}
          <hr />
          {take5.take5PreviewVideoUrl && (
            <>
              <h2>
                <strong>take5 Preview</strong>
              </h2>
              <iframe
                title={`About ${take5.title} video`}
                width="100%"
                height="425"
                src={take5.take5PreviewVideoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </>
          )}

          {/* eslint-disable react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: take5.descriptionHtml }} />
          {/* eslint-enable react/no-danger */}
        </Col>
        <Col>
          <h2>
            <strong>This take5 is for</strong>
          </h2>
          <ul>
            {map(take5.thistake5IsFor, ({ attribute }, idx) => (
              <li key={`this-take5-is-for-${idx}`}>
                <span>{attribute}</span>
              </li>
            ))}
          </ul>

          <h2>Meet the instructor</h2>
          {take5.author && take5.author.photo && (
            <img
              className="img-fluid"
              alt={take5.author.displayName}
              src={getImageUrl(take5.author.photo.path)}
            />
          )}
          <h3 className={classes.authorName}>{take5.author.displayName}</h3>
          {/* eslint-disable react/no-danger */}
          <div
            className={classes.authorBio}
            dangerouslySetInnerHTML={{ __html: take5.author.bioHtml }}
          />
          {/* eslint-enable react/no-danger */}
        </Col>
      </Row>
    </Layout>
  );
};

Take5Page.propTypes = {
  pageContext: PropTypes.shape({
    take5: PropTypes.shape({
      _id: PropTypes.string,
    }),
  }).isRequired,
};

export default Take5Page;

export const query = graphql`
  query getTake5Course($id: ID!) {
    takeshape {
      take5: getTake5(_id: $id) {
        transcript
        courseNumber
        videoUrl
        subtitle
        title
        searchSummary
        author {
          photo {
            description
            sourceUrl
            _id
          }
          displayName
        }
      }
    }
  }
`;
