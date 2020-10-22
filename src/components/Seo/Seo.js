import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ children, description, lang, keywords, title }) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          site
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="title" content={title} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:description" content={metaDescription} />
      <meta type="twitter:site" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {children}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
};

SEO.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  lang: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default SEO;
