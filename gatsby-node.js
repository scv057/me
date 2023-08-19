const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const _ = require("lodash");

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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const labelTemplate = path.resolve("src/pages/tags/tags.tsx");

  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { labels: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: labelTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
