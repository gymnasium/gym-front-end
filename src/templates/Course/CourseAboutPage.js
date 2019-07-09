import React from 'react';

import { Col, Row } from 'react-bootstrap';

import { Layout } from '../../components';

const CourseAboutPage = ({ pageContext }) => {
  const { course } = pageContext;
  return (
    <Layout>
      <Row>
        <Col>
          <h1>{course.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: course.descriptionHtml }} />
        </Col>
      </Row>
    </Layout>
  );
};

export default CourseAboutPage;
