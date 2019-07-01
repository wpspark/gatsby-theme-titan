module.exports = {
  siteMetadata: {
    title: `ThemesGrove`,
    description: `ThemesGrove specializes in WordPress creates awesome themes and plugins. Choose the perfect WordPress Themes and Plugins from our vast collection.`,
    author: `@themexpert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, 
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
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `themesgrove.com`,
        auth: {},
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        perPage: 100,
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/categories",
          "**/users",
          "**/tags",
          "**/taxonomies",
          "**/wp-api-menus",
          "**/media",
        ],
        excludedRoutes: [
          "**/wc",
          "**/oembed",
          "**/akismet",
          "**/rankmath",
          "**/wp-analytify",
          "**/affwp",
          "**/wp-content/uploads/edd",
          "**/acf",
        ],
        verboseOutput: true,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
