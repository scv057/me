import React from "react";
import {graphql, Link} from "gatsby";
import DefaultLayout from "../../components/layout";
import * as styles from './index.module.css';
import Label from "../../components/label";
import "@code-hike/mdx/dist/index.css"
import Seo from "../../components/seo";

const Blog = ({data}) => {

  return <DefaultLayout pageTitle="Andrew's Blog" layout={"lr"}>
    {
      data.allMdx.nodes.map(node => (
        <Link to={`/blog/${node.frontmatter.slug}`}
              style={{textDecoration: 'none'}}
              activeStyle={{}}
              className={styles.blog}
              key={node.id}>
          <article>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <Label text={'css'}/>
          </article>
        </Link>
      ))
    }
  </DefaultLayout>;
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo/>;
export default Blog;
