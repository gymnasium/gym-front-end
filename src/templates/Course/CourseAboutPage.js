import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { Layout } from '../../components';

const CourseAboutPage = ({ pageContext }) => {
  const { course } = pageContext;
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>{course.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: course.descriptionHtml }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CourseAboutPage;
