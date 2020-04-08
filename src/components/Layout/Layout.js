import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Container, Footer, Header } from '..';

import layoutClasses from './layout.module.css';

const Layout = ({ children, classes, isFullWidthLayout = false }) => {
  const containerClass = isFullWidthLayout
    ? layoutClasses.fullWidthContainer
    : undefined;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className={classes && classes.contentWrapper}>
            <Container className={containerClass} fluid={isFullWidthLayout}>
              {children}
            </Container>
          </main>
          <Footer />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    contentWrapper: PropTypes.string,
  }),
  isFullWidthLayout: PropTypes.bool,
};

export default Layout;
