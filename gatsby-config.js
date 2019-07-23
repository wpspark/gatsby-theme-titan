let token = process.argv[process.argv.length-1]
require("dotenv").config({
  path: `env/.env.${token}`,
})

module.exports = { 
  siteMetadata: {
    title: `WpSpark`,
    description : `WpSpark specializes in WordPress creates awesome themes and plugins. Choose the perfect WordPress Themes and Plugins from our vast collection.`,
    author : `@wpspark`,
    disqusShortname: process.env.disqusShortname,
    wordpressBaseUrl: `${process.env.protocol}://${process.env.baseUrl}`,
    twitterHandle: `@theanamhossain`,
    url:`${process.env.protocol}://${process.env.baseUrl}`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, 
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/Images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-image`,
    `gatsby-plugin-sharp`, 
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.baseUrl,
        auth: {},
        protocol: process.env.protocol,
        hostingWPCOM: false,
        useACF: false,
        perPage: 100,
        includedRoutes: [
          "**/site_metadata",
          "**/posts",
          "**/pages",
          // "**/media",
          "**/categories",
          "**/tags",
          "**/taxonomies",
          "**/users",
          // "/wp-api-menus/**",
        ],
        verboseOutput: true,
        // concurrentRequests: 1,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://github.us15.list-manage.com/subscribe/post?u=c9ced03a02309f56c1e8b3962&amp;id=4f935ae4b6', // add your MC list endpoint here; see instructions below
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
