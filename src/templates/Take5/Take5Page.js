import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Col, Container, Row } from 'react-bootstrap';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, SEO } from '../../components';

import classes from './Take5Page.module.css';

const Take5Page = ({ data }) => {
  const { take5 } = data.takeshape;
  const { page } = data;
  if (!take5) return null;

  const { take5Type } = take5;

  const styles = {
    pageHeaderContainer: {
      backgroundColor: take5Type && take5Type.color && take5Type.color.hex,
    },
  };

  return (
    <Layout
      isFullWidthLayout
      classes={{ contentWrapper: classes.contentWrapper }}
    >
      <SEO title={`About ${take5.title}`} />
      <Row noGutters>
        <Col
          className={classes.pageHeaderContainer}
          style={styles.pageHeaderContainer}
        >
          <div className={classes.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${take5.youtubeVideoId}?feature=oembed`}
              frameBorder="0"
              allowFullScreen
              title="take5"
            />
          </div>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col md={8}>
            <header>
              <h1 className={classes.title}>{take5.title}</h1>
              <p className={classes.instructor}>
                {` With ${take5.author.displayName}`}
              </p>
            </header>
            <p className={classes.description}>{take5.subtitle}</p>

            <details className={classes.transcriptContainer}>
              <summary aria-expanded="false" tabIndex="0" role="button">
                <b>Transcript</b>
              </summary>
              <article>
                <MDXRenderer>{page.childMdx.body}</MDXRenderer>
              </article>
            </details>
          </Col>
          <Col md={4}>
            <h2 className={classes.title}>Resources</h2>
          </Col>
        </Row>
      </Container>
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
  query getTake5Course($id: ID!, $path: String) {
    takeshape {
      take5: getTake5(_id: $id) {
        transcript
        courseNumber
        youtubeVideoId
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
    page: sitePage(path: { eq: $path }) {
      childMdx {
        body
      }
    }
  }
`;
