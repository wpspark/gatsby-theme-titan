const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
// const createPaginatedPages = require('gatsby-paginate');

const categoryQuery = `
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
  allWordpressCategory{
    edges{
      node{
        id
        wordpress_id
        slug
        name
        count
      }
    }
  }
}`

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(categoryQuery)
    .then(result => {

      if(result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const categoryTemplate = path.resolve("./src/Templates/Category.js");
      const categoriesTemplate = path.resolve("./src/Templates/CategoriesArchive.js");
      
      createPage({
        path: `categories/`,
        component: slash(categoriesTemplate),
        context: {
          allWordpressCategory: result.data.allWordpressCategory,
          wordpressSiteMetadata: result.data.wordpressSiteMetadata
        },
    });
      _.each(result.data.allWordpressCategory.edges, edge => {
          createPage({
              path: `/categories/${edge.node.slug}`,
              component: slash(categoryTemplate),
              context: {
                id: edge.node.id,
                slug: edge.node.slug,
                wordpressCategory: edge.node,
                wordpressSiteMetadata: result.data.wordpressSiteMetadata,
              },
          });
      });

      resolve();

    });
  });
}

