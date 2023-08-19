import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import Nav from "../../components/nav";
import Label from "../../components/label";

const Main = ({ data }) => {
  const { group } = data.allMdx;
  console.log(group);

  return (
    <div>
      {group.map((label) => {
        return <Label key={label.name} text={label.name} />;
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
