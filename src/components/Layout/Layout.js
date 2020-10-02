import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import { Box } from '@chakra-ui/core';

import { CodeBlock, Footer, Header } from '..';

import './Layout.css';

// a Layout that enables full-bleed components using this strategy: https://joshwcomeau.com/css/full-bleed/

const Layout = ({ children, classes, isFullWidthLayout = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const components = {
    // eslint-disable-next-line react/display-name
    pre: props => <div {...props} />,
    code: CodeBlock,
  };

  return (
    <MDXProvider components={components}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box as="main" className="wrapper">
        {children}
      </Box>
      <Footer />
    </MDXProvider>
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
