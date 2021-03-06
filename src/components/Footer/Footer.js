import React from 'react';

import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link } from 'gatsby';

import { Col, Row } from 'react-bootstrap';

import { Container, Microcopy } from '..';
import classes from './Footer.module.css';

import GymnasiumLogo from '../../images/gymnasium-logo-white.svg';

import TwitterIcon from '../../images/icon-twitter.svg';
import InstagramIcon from '../../images/icon-instagram.svg';
import YouTubeIcon from '../../images/icon-youtube.svg';
import LinkedInIcon from '../../images/icon-linkedin.svg';
import MediumIcon from '../../images/icon-medium.svg';
import GitHubIcon from '../../images/icon-github.svg';

const FooterLink = ({ children, rest, to }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link className={classes.footerLink} {...rest} to={to}>
    {children}
  </Link>
);

const Footer = props => (
  <footer className={`${classes.siteFooter} container-fluid`} id="contentinfo">
    <Container>
      <nav aria-label="Footer Navigation">
        <Row>
          <Col xs={12} sm={10} md={3}>
            <div className={classes.gymBrand}>
              <FooterLink to="/" title="Gymnasium Homepage">
                <img
                  className={classes.gymnasiumLogo}
                  alt="Aquent Gymnasium"
                  src={GymnasiumLogo}
                  width="200"
                  height="23"
                  role="heading"
                  aria-level="3"
                />
              </FooterLink>
              <Microcopy title="footer-slogan" />
            </div>
          </Col>
          <Col xs={6} md={2}>
            <div className={classes.whatWeDo}>
              <section className={classes.footerLinkList} id="what-we-do">
                <h2 className="all-caps">What We Do</h2>
                <ul>
                  <li>
                    <FooterLink to="/courses">Courses</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/jobs">Jobs</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/webinars">Webinars</FooterLink>
                  </li>
                  <li>
                    <OutboundLink
                      href="https://medium.com/gymnasium"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.footerLink}
                    >
                      Articles
                    </OutboundLink>
                  </li>
                  <li>
                    <FooterLink to="/about">About</FooterLink>
                  </li>
                </ul>
              </section>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className={classes.ourFocus}>
              <section className={classes.footerLinkList} id="our-focus">
                <h2 className="all-caps">Opportunity Awaits</h2>
                <ul>
                  <li>
                    <FooterLink to="/ux-design">UX Design</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/prototyping">Prototyping</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/front-end-development">
                      Front-End Development
                    </FooterLink>
                  </li>
                </ul>
              </section>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className={classes.resources}>
              <section className={classes.footerLinkList} id="resources">
                <h2 className="all-caps">Resources</h2>
                <ul>
                  <li>
                    <FooterLink to="/faq">FAQ</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/support">Support</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/privacy">Privacy Policy</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/csr-policy">
                      Corporate Social Responsibility
                    </FooterLink>
                  </li>
                </ul>
              </section>
            </div>
          </Col>
          <Col xs={6} md={1}>
            <div className="social">
              <section className={classes.footerLinkList} id="social">
                <h2 className="all-caps">Social</h2>
                <ul>
                  <li>
                    <OutboundLink
                      title="Twitter"
                      href="https://twitter.com/AquentGymnasium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Twitter"
                        src={TwitterIcon}
                        width="24"
                        height="24"
                      />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink
                      title="Instagram"
                      href="https://www.instagram.com/aquent_gymnasium/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        alt="Instagram"
                        src={InstagramIcon}
                        width="24"
                        height="24"
                      />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink
                      title="YouTube"
                      href="https://www.youtube.com/channel/UCsAAa0dL-ZJpq4gN1zEcXYw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="YouTube"
                        src={YouTubeIcon}
                        width="24"
                        height="24"
                      />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink
                      title="LinkedIn"
                      href="https://www.linkedin.com/school/gymnasium/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="LinkedIn"
                        src={LinkedInIcon}
                        width="24"
                        height="24"
                      />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink
                      title="Medium"
                      href="https://medium.com/gymnasium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Medium"
                        src={MediumIcon}
                        width="24"
                        height="24"
                      />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink
                      title="GitHub"
                      href="https://github.com/gymnasium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="GitHub"
                        src={GitHubIcon}
                        width="24"
                        height="24"
                      />
                    </OutboundLink>
                  </li>
                </ul>
              </section>
            </div>
          </Col>
        </Row>
      </nav>
      <Row>
        <Col>
          <div>
            <OutboundLink
              title="Open edX"
              href="http://openedx.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.openEdxLogo}
                alt="Powered by Open edX"
                src="https://files.edx.org/openedx-logos/edx-openedx-logo-tag-light.png"
                width="150"
                height="50"
              />
            </OutboundLink>
          </div>
          <div>
            <OutboundLink href="https://www.netlify.com">
              <img
                alt="Deploys by Netlify"
                src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
              />
            </OutboundLink>
          </div>
          <div className={classes.copyright}>
            <small>
              © 2019 &nbsp;
              <FooterLink to="/">Aquent Gymnasium</FooterLink>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
