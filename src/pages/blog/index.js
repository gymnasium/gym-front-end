import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import pluralize from 'pluralize';

import { Layout } from '../../components';
import { getUrlFromTitle } from '../../utils/urlUtils';
import CONSTANTS from '../../utils/constants';

const BlogPage = ({ data }) => {
  const { posts } = data.takeshape;
  const { total } = posts;
  return (
    <Layout>
      <Row>
        <Col>
          <h1>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {total} {pluralize('Posts', total)}
          </h1>
        </Col>
      </Row>
      {posts.items.map(post => (
        <Row key={post._id}>
          <Col>
            <Link
              to={`/${CONSTANTS.URLS.BLOG.SINGLE_POST}${getUrlFromTitle(
                post.title
              )}`}
            >
              <h2>{post.title}</h2>
            </Link>
            <h3>{post.subtitle}</h3>
          </Col>
        </Row>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    takeshape {
      posts: getBlogPostList {
        total
        items {
          _id
          _enabled
          title
          subtitle
          bodyHtml
          author {
            searchSummary
          }
        }
      }
    }
  }
`;

export default BlogPage;
