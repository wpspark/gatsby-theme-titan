const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const userQuery = `
{
    site{
        siteMetadata{
            title
            description
            author
            disqusShortname
            wordpressBaseUrl
        }
    } 
    wordpressSiteMetadata{
        name
        description
        url
        home
    }
    allWordpressWpUsers{
        edges{
            node{
                id
                wordpress_id
                name
                description
                slug
                avatar_urls {
                    wordpress_96
                }
                authored_wordpress__POST{
                    id
                    title
                    wordpress_id
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    categories{
                        id
                        name
                        slug
                        link
                    }
                    spark_media
                    author {
                        id
                        name
                        slug
                        avatar_urls{
                          wordpress_96
                        }
                    }
                }
            }
        }
    }
}`
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(userQuery)
    .then(result => {
    
      if(result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const userTemplate = path.resolve("./src/Templates/User.js");
      
        _.each(result.data.allWordpressWpUsers.edges, edge => {
            createPage({
                path: `/user/${edge.node.slug}/`,
                component: slash(userTemplate),
                context: {
                    id: edge.node.id,
                    slug: edge.node.slug,
                    userData:edge.node,
                    wordpressPost: edge.node.authored_wordpress__POST,
                    site: result.data.site,
                    wordpressSiteMetadata: result.data.wordpressSiteMetadata
                },
            });
        });
        resolve();

    });
  });
}

