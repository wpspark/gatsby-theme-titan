const axios = require('axios');
const webpack = require('webpack');

const createPosts = require(`./src/Routing/CreatePosts`)
const createCategories = require(`./src/Routing/CreateCategories`)
const createUsers = require(`./src/Routing/CreateUsers`)
// const createPages = require(`./src/Routing/createpages`)
// const createTags = require(`./src/routing/createtags`)


exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createCategories({ actions, graphql })
  // await createPages({ actions, graphql })
  await createUsers({ actions, graphql })
  // await createTags({ actions, graphql })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const url = `${process.env.protocol}://${process.env.baseUrl}`;
  const result = await axios.get(`${url}/wp-json/spark/sitedata`);
  const data = result.data;

  const dataObject = {
    "favicon": data.favicon,
    "logo": data.logo
  };

  const nodeContent = JSON.stringify(dataObject)
  const nodeMeta = {
    id: createNodeId(`spark-site-info`),
    parent: null,
    children: [],
    internal: {
      type: `sparkData`,
      content: nodeContent,
      contentDigest: createContentDigest(dataObject)
    }
  }

  const node = Object.assign({}, dataObject, nodeMeta)
  actions.createNode(node)
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ],
  })
}