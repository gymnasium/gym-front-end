import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import { CodeBlock, Container, Footer, Header, SEO } from '..';

import layoutClasses from './layout.module.css';

const Layout = ({ children, classes, isFullWidthLayout = false }) => {
  const containerClass = isFullWidthLayout
    ? layoutClasses.fullWidthContainer
    : undefined;

  const components = {
    // eslint-disable-next-line react/display-name
    pre: props => <div {...props} />,
    code: CodeBlock,
  };

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
        <MDXProvider components={components}>
          <SEO defer={false} />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className={classes && classes.contentWrapper}>
            <Container className={containerClass} fluid={isFullWidthLayout}>
              {children}
            </Container>
          </main>
          <Footer />
        </MDXProvider>
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
