require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gymnasium`,
    description: `Gymnasium offers free online courses on web development, design, user experience, and content creation.`,
    author: `@aquent_gymnasium`,
    site: 'https://www.thegymnasium.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isUsingColorMode: false,
        isResettingCSS: true,
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // when process.env.NODE_ENV === 'production'
        prodKey: process.env.SEGMENT_PRODUCTION_WRITE_KEY,

        // when process.env.NODE_ENV === 'development'
        devKey: process.env.SEGMENT_DEV_WRITE_KEY,
        trackPage: true,
        delayLoad: true, // important to make segment work with gatsby <Link /> routing
      },
    },
    {
      resolve: `gatsby-plugin-intercom-spa`,
      options: {
        app_id: process.env.INTERCOM_APP_ID,
        include_in_development: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_PROPERTY_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'thegymnasium.com',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'TS',
        fieldName: 'takeshape',
        // Url to query from
        url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
        // HTTP headers
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          camelCase: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'rhf0qta',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://thegymnasium.com',
          'https://p.typekit.net',
          'https://use.typekit.net',
          'https://googleads.g.doubleclick.net',
        ],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
