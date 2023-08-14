import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Nav from "../../components/nav";
import classNames from "classnames";
import SEO from "../../components/seo";

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
      excerpt(pruneLength: 150)
      frontmatter {
        author
        describe
        slug
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;

export const Head = ({ data }) => {
  const { excerpt, frontmatter } = data.mdx;
  const { author, describe, labels, title } = frontmatter;
  const description = describe || excerpt;

  return <SEO description={description} title={title} />;
};
