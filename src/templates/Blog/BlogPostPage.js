import React from 'react';
import { graphql } from 'gatsby';
import { Col, Row } from 'react-bootstrap';

import { Layout } from '../../components';

const BlogPostPage = ({ data, pageContext }) => {
  const { post } = data.takeshape;
  const { bodyHtml, subtitle, title } = post;
  return (
    <Layout>
      <Row>
        <Col>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  query($id: ID!) {
    takeshape {
      post: getBlogPost(_id: $id) {
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
`;

export default BlogPostPage;
