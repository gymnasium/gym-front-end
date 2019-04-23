import React from 'react';
import { graphql } from 'gatsby';

import { Col, Container, Row } from 'react-bootstrap';

import { Layout } from '../../components';

const CourseAboutPage = ({ data }) => {
  const { course } = data.takeshape;
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

export const query = graphql`
  query($id: ID!) {
    takeshape {
      course: getFullCourse(_id: $id) {
        title
        syllabus
        courseNumber
        descriptionHtml
        shortDescription
        courseUrlSuffix
      }
    }
  }
`;

export default CourseAboutPage;
