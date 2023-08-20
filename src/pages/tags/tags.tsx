import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import BlogList from "../../components/blogList";

const Main = ({ data }) => {
  return (
    <>
      <div className={"mb-6 mt-8 text-2xl dark:text-white"}>labels</div>
      <BlogList data={data} />
    </>
  );
};

const Tags = ({ data }) => {
  return (
    <Layout
      layout={"lr"}
      slots={{
        left: <Nav direction={"col"} />,
        right: <Main data={data} />,
      }}
    />
  );
};

export const query = graphql`
  query ($labels: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { labels: { nin: [$labels] } } }
    ) {
      totalCount
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
export default Tags;

export const Head = ({ data }) => {
  return <Seo title={`tags/xxx`} />;
};
