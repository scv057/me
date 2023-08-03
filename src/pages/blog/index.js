import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import * as styles from "./index.module.css";
import Label from "../../components/label";
import "@code-hike/mdx/dist/index.css";
import Nav from "../../components/nav";

const Main = ({ data }) => {
  return (
    <>
      <div className={"mb-6 mt-8 text-2xl dark:text-white"}>Andrew's Blog</div>
      <div>
        {data.allMdx.nodes.map((node) => (
          <Link
            to={`/blog/${node.frontmatter.slug}`}
            style={{ textDecoration: "none" }}
            activeStyle={{}}
            className={styles.blog}
            key={node.id}
          >
            <article>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              {node.fields.labels &&
                node.fields.labels.map((label) => (
                  <Label key={label} text={label} />
                ))}
            </article>
          </Link>
        ))}
      </div>
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
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { id: { ne: "45fdd8f0-7cc6-5327-8751-f11dbfbd836d" } }
    ) {
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

// export const Head = () => <Seo/>;

export default Blog;
