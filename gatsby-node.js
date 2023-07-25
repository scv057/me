const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, actions: {createNodeField}}) => {
  // TODO: 先判断有无字段再创建
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({node, getNode})
    });
  }
};

