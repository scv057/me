import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost: React.FC<{data: any}> = (props) => {
    console.log(props);
    const {data} = props;

    return (
        <Layout pageTitle={ data.mdx.frontmatter.title }>
            <p>{ data.mdx.frontmatter.date }</p>
            <MDXRenderer>
                { data.mdx.body }
            </MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost;
