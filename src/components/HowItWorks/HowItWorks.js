import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Microcopy, Title } from '..';

import classes from './HowItWorks.module.css';

const HowItWorks = () => (
  <header id="how-gymnasium-works" className={classes.headerTab}>
    <Title className="text-center">How Gymnasium Works</Title>
    <section className={classes.howItWorks}>
      <Row>
        <Col>
          <Microcopy title="how-it-works-1" />
        </Col>
        <Col>
          <Microcopy title="how-it-works-2" />
        </Col>
        <Col>
          <Microcopy title="how-it-works-3" />
        </Col>
        <Col>
          <Microcopy title="how-it-works-4" />
        </Col>
      </Row>
    </section>
  </header>
);

export default HowItWorks;
