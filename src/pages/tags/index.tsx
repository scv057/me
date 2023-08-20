import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import Nav from "../../components/nav";
import Button from "../../components/button";

const Main = ({ data }) => {
  const { group } = data.allMdx;

  return (
    <div>
      {group.map((label) => {
        return (
          <Button
            className={"--x-label"}
            key={label.name}
            href={""}
            type={"link"}
          >
            {label.name}
          </Button>
        );
      })}
    </div>
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
    ></Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx {
      group(field: { frontmatter: { labels: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
  }
`;

export default Tags;

export const Head = () => {
  return <Seo title={"labels"} />;
};
