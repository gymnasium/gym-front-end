import React from 'react';

import classes from './Footer.module.css';

console.log('footer classes', classes);

const Footer = props => (
  <footer className="container-fluid" id="contentinfo">
    <div className="container">
      <div className="row">
        <nav aria-label="Footer Navigation">
          <div className="col-xs-12 col-sm-10 col-md-3">
            <div className={classes.gymBrand}>
              <a href="/" title="Gymnasium Homepage">
                <img
                  className={classes.gymnasiumLogo}
                  alt="Aquent Gymnasium"
                  srcSet="https://staging.gymcms.xyz/img/brand/gymnasium-logo-white.svg"
                  src="https://staging.gymcms.xyz/img/brand/gymnasium-logo-white-4x.png"
                  width="200"
                  height="23"
                  role="heading"
                />
              </a>
              <p>
                Bridging the gap between education and opportunity with free
                online courses.
              </p>
            </div>
          </div>
          <div className={`col-xs-6 col-md-2 ${classes.whatWeDo}`}>
            <section className={classes.footerLinkList} id="what-we-do">
              <h2>What We Do</h2>
              <ul>
                <li>
                  <a href="/courses">Courses</a>
                </li>
                <li>
                  <a href="/jobs">Jobs</a>
                </li>
                <li>
                  <a href="/webinars">Webinars</a>
                </li>
                <li>
                  <a
                    href="https://medium.com/gymnasium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </section>
          </div>
          <div className={`col-xs-6 col-md-3 ${classes.ourFocus}`}>
            <section className={classes.footerLinkList} id="our-focus">
              <h2>Opportunity Awaits</h2>
              <ul>
                <li>
                  <a href="/ux-design">UX Design</a>
                </li>
                <li>
                  <a href="/prototyping">Prototyping</a>
                </li>
                <li>
                  <a href="/front-end-development">Front-End Development</a>
                </li>
              </ul>
            </section>
          </div>
          <div className={`col-xs-6 col-md-3 ${classes.resources}`}>
            <section className={classes.footerLinkList} id="resources">
              <h2>Resources</h2>
              <ul>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/csr-policy">Corporate Social Responsibility</a>
                </li>
                <li id="headway-changelog-anchor">
                  <a
                    href="https://headwayapp.co/the-gymnasium-changelog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Changelog
                  </a>
                  <span id="HW_badge_cont" className={classes.HW_visible}>
                    <span
                      id="HW_badge"
                      data-count-unseen="3"
                      className={classes.HW_visible}
                    >
                      3
                    </span>
                  </span>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-xs-6 col-md-1 social">
            <section className={classes.footerLinkList} id="social">
              <h2>Social</h2>
              <ul>
                <li>
                  <a
                    title="Twitter"
                    href="https://twitter.com/AquentGymnasium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Twitter"
                      srcSet="https://staging.gymcms.xyz/img/social/icons/icon-twitter.svg"
                      src="https://staging.gymcms.xyz/img/social/icons/icon-twitter-4x.png"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="Instagram"
                    href="https://www.instagram.com/aquent_gymnasium/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="Instagram"
                      srcSet="https://staging.gymcms.xyz/img/social/icons/icon-instagram.svg"
                      src="https://staging.gymcms.xyz/img/social/icons/icon-instagram-4x.png"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="YouTube"
                    href="https://www.youtube.com/channel/UCsAAa0dL-ZJpq4gN1zEcXYw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="YouTube"
                      srcSet="https://staging.gymcms.xyz/img/social/icons/icon-youtube.svg"
                      src="https://staging.gymcms.xyz/img/social/icons/icon-youtube-4x.png"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="LinkedIn"
                    href="https://www.linkedin.com/school/gymnasium/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="LinkedIn"
                      srcSet="https://staging.gymcms.xyz/img/social/icons/icon-linkedin.svg"
                      src="https://staging.gymcms.xyz/img/social/icons/icon-linkedin-4x.png"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="Medium"
                    href="https://medium.com/gymnasium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Medium"
                      srcSet="https://staging.gymcms.xyz/img/social/icons/icon-medium.svg"
                      src="https://staging.gymcms.xyz/img/social/icons/icon-medium-4x.png"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="GitHub"
                    href="https://github.com/gymnasium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="GitHub"
                      srcSet="https://staging.gymcms.xyz/img/social/icons/icon-github.svg"
                      src="https://staging.gymcms.xyz/img/social/icons/icon-github-4x.png"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <a
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
          </a>
          <div className={classes.copyright}>
            <small>
              @ 2019 <a href="https://thegymnasium.com">Aquent Gymnasium</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
