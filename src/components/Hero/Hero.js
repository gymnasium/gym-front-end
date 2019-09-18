import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import classes from './Hero.module.css';
import { TwitchHero } from '.';

const Hero = ({ isTwitchChannelActive }) => {
  if (!!isTwitchChannelActive) return <TwitchHero />;

  return (
    <div className={classes.background}>
      <Container>
        <Row>
          <Col xsHidden mdHidden lg={1} />
          <Col lg={4}>
            <h1>Hero!</h1>
          </Col>
          <Col>
            <h1>RESPONSIVE WEB DESIGN FUNDAMENTALS</h1>
            <h2>with Jason Pamental</h2>
            <subtitle>
              A code-intensive course on how to build responsive websites that
              look great across devices.
            </subtitle>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
