const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
// const createPaginatedPages = require('gatsby-paginate');

const pageQuery = `
{
  site{
    siteMetadata{
      title
      description
      author
      disqusShortname
    }
  }
  wordpressSiteMetadata{
    name
    description
    url
    home
  }
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}`

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(pageQuery)
    .then(result => {

      if(result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const singlePage = path.resolve("./src/Templates/Page.js");
      _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
              path: `/${edge.node.slug}/`,
              component: slash(singlePage),
              context: {
                  id: edge.node.id,
                  wordpressSiteMetadata: result.data.wordpressSiteMetadata
              },
          });
      });
      
      resolve();

    });
  });
}

