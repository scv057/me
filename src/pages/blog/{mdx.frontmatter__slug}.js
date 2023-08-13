import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Nav from "../../components/nav";
import classNames from "classnames";
const BlogPost = ({ data, children }) => {
  const div = React.createElement(
    "div",
    { className: classNames("prose", "dark:prose-invert") },
    children,
  );
  return React.createElement(Layout, {
    layout: "lr",
    slots: {
      left: React.createElement(Nav, { direction: "col" }),
      right: div,
    },
  });
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
      fields {
        labels
      }
    }
  }
`;
export default BlogPost;
