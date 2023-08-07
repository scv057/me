import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Nav from "../../components/nav";
import classNames from "classnames";

const BlogPost: React.FC = ({ data, children }) => {
  const div = (
    <div className={classNames("prose", "dark:prose-invert")}>{children}</div>
  );

  return (
    <Layout
      layout={"lr"}
      slots={{
        left: <Nav direction={"col"} />,
        right: div,
      }}
    />
  );
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
