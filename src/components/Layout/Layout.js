import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from 'react-bootstrap';

import { Footer, Header } from '..';

const Layout = ({ children, fullWidth = false }) => (
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
        <main>
          <Container fluid={fullWidth}>{children}</Container>
        </main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool.isRequired,
};

export default Layout;
