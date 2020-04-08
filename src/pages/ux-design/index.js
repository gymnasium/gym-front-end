import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { Button, H1, H2, FeaturedContent, Link } from '@gymnasium/gym-ui';
import { Container, Image, Layout, SEO } from '../../components';

import classes from './ux-design.module.css';

const UxDesignPage = props => {
  const coursesFeaturedContent = (
    <FeaturedContent
      title="Courses"
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button to="/courses/course-v1:GYM+014+0/about">Get Started</Button>
        </div>
      }
      extra={
        <Link isDark to="#courses">
          <b>View More Courses</b>
        </Link>
      }
      backgroundColor="#000"
      strongHeader
    >
      <div className="card-main equal-h">
        <Image
          alt="Prototyping for Digital Products and Websites course image"
          src="courses-featured-image.svg"
          width="100%"
        />
        <H2>Prototyping for Digital Products and Websites</H2>
      </div>
    </FeaturedContent>
  );

  const tutorialsFeaturedContent = (
    <FeaturedContent
      title="Webinars"
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button to="/take5/writing-effective-survey-questions">
            Watch Now
          </Button>
        </div>
      }
      extra={
        <Link isDark to="#tutorials">
          <b>View More Tutorials</b>
        </Link>
      }
      backgroundColor="#000"
      strongHeader
    >
      <div className="card-main equal-h">
        <Image
          alt="Erin Young of UX Slide"
          src="tutorials-featured-image.jpg"
          width="100%"
        />
        <H2>Writing Effective Survey Questions</H2>
      </div>
    </FeaturedContent>
  );
  const webinarsFeaturedContent = (
    <FeaturedContent
      title="Webinars"
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about">
            Watch Now
          </Button>
        </div>
      }
      extra={
        <Link isDark to="#webinars">
          <b>View More Webinars</b>
        </Link>
      }
      backgroundColor="#000"
      strongHeader
    >
      <div className="card-main equal-h">
        <Image
          alt="Erin Young of UX Slide"
          src="webinars-featured-image.jpg"
          width="100%"
        />
        <H2>
          UX Design:
          <br />
          Prototyping
          <br />
          as Process
        </H2>
      </div>
    </FeaturedContent>
  );

  return (
    <Layout isFullWidthLayout>
      <SEO title="UX Design" />

      <section className={classes.pageSection}>
        <Container>
          <Row>
            <Col>
              <H1 textAlign="left">Ux Design</H1>
              <p className={classes.subtitle}>
                Gymnasium offers free online UX <a href="#courses">courses</a>,{' '}
                <a href="#tutorials">tutorials</a>,{' '}
                <a href="#webinars">webinars</a>,{' '}
                <a href="#articles">articles</a>, and<a href="#jobs">jobs</a>{' '}
                through Aquent.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>{coursesFeaturedContent}</Col>
            <Col>{tutorialsFeaturedContent}</Col>
            <Col>{webinarsFeaturedContent}</Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default UxDesignPage;
