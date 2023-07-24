import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Theme from "../../components/theme";

const BlogPost: React.FC<{data: any}> = (props) => {
    const {data} = props;

    return (
        <Theme>
            <Layout pageTitle={ data.mdx.frontmatter.title }>
                <h1>{ data.mdx.frontmatter.title }</h1>
                <p>{ data.mdx.frontmatter.date }</p>
                <MDXRenderer>
                    { data.mdx.body }
                </MDXRenderer>
            </Layout>
        </Theme>
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
