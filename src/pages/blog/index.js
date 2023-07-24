import React from "react";
import {graphql, Link} from "gatsby";
import {LRLayout} from "../../components/layout";
import * as styles from './index.module.css';
import Label from "../../components/label";

const Blog = ({data}) => {
  return <LRLayout pageTitle="Andrew's BLog">
    {
      data.allMdx.nodes.map(node => (
        <Link to={`/blog/${node.slug}`}
              style={{textDecoration: 'none'}}
              activeStyle={{}}
              className={styles.blog}
              key={node.id}>
          <article >
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <Label text={'css'}/>
          </article>
        </Link>
      ))
    }
  </LRLayout>;
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default Blog;