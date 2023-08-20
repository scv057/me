import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import "@code-hike/mdx/dist/index.css";
import Nav from "../../components/nav";
import Seo from "../../components/seo";
import BlogList from "../../components/blogList";

const Main = ({ data }) => {
  return (
    <>
      <div className={"mb-6 mt-8 text-2xl dark:text-white"}>Andrew's Blog</div>
      <BlogList data={data} />
    </>
  );
};

const Blog = ({ data }) => {
  return (
    <Layout
      layout={"lr"}
      slots={{
        left: <Nav direction={"col"} />,
        right: <Main data={data} />,
      }}
    ></Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        fields {
          labels
        }
        excerpt
      }
    }
  }
`;

export default Blog;

export const Head = () => {
  return <Seo title={"blogs"} />;
};
