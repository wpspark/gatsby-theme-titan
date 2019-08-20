const axios = require('axios');
const webpack = require('webpack');

const createPosts = require(`./src/Routing/CreatePosts`)
const createCategories = require(`./src/Routing/CreateCategories`)
const createUsers = require(`./src/Routing/CreateUsers`)


exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createCategories({ actions, graphql })
  await createUsers({ actions, graphql })
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
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
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



// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

