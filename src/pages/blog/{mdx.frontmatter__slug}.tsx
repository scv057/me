import React from "react";
import DefaultLayout from "../../components/layout";
import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import Theme from "../../components/theme";

const BlogPost: React.FC<{data, children}> = (props) => {
    const {data, children} = props;

    return (
        <Theme>
            <DefaultLayout pageTitle={ data.mdx.frontmatter.title }>
                <h1>{ data.mdx.frontmatter.title }</h1>
                <p>{ data.mdx.frontmatter.date }</p>
                { children }
            </DefaultLayout>
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
