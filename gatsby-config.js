/* eslint @typescript-eslint/camelcase: 0 */
/* eslint @typescript-eslint/no-var-requires: 0 */
const secrets = require('./secrets');

module.exports = {
  siteMetadata: {
    title: 'Ortmesh',
    description: `
            Raj is a software developer from Toronto who loves to code, work on side projects and read audio books.
            His specialities include SQL Server, React JS, and .NET Framework. Ortmesh is Raj's personal blogging site,
             made by him to share his own ideas and tips.
        `,
    canonicalUrl: 'https://ortmesh.com',
    image: 'https://ortmesh.com/headshot.jpg',
    author: {
      name: 'Rajjeet Phull',
      minibio: `
            Raj is a software developer from Toronto who loves to code, work on side projects and read audio books.
            His specialities include SQL Server, React JS, and .NET Framework. Ortmesh is Raj's personal blogging site,
             made by him to share his own ideas and tips.
            `,
    },
    organization: {
      name: 'Ortmesh',
      url: 'https://ortmesh.com',
      logo: 'https://ortmesh.com/logo.png',
    },
    social: {
      twitter: '@ortmesh',
      fbAppID: '',
    },
    categories: [
      {
        slug: 'portfolio',
        name: 'Portfolio',
      },
      {
        slug: 'review',
        name: 'Review',
      },
      {
        slug: 'productivity',
        name: 'Productivity',
      },
      {
        slug: 'coding',
        name: 'Coding',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ortmesh',
        short_name: 'Ortmesh',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2185d0',
        display: 'standalone',
        icon: 'src/images/logo.png',
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: secrets.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: { inlineCodeMarker: '=>' },
          },
        ],
      },
    },
    'gatsby-plugin-webpack-size',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
};
