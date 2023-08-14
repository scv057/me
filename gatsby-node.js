const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  // TODO: 先判断有无字段再创建
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "slug",
      value: createFilePath({ node, getNode }),
    });
    // TODO: GQL query 不允许访问一些不存在的fields，临时方案
    createNodeField({
      node,
      name: "labels",
      value: node.frontmatter.labels || [],
    });
    createNodeField({
      node,
      name: "describe",
      value: node.frontmatter.describe || "",
    });
  }
};
