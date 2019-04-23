import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { GymButton, Image, Layout, SEO } from '../components';

import classes from './HomePage.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid>
      <Container className={classes.container}>
        <Row>
          <Col>
            <GymButton>Hello</GymButton>
            <h1>test</h1>
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
);

export default IndexPage;
