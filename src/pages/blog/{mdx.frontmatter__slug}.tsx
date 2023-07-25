import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Nav from "../../components/nav";

const BlogPost: React.FC = ({data, children}) => {

    const div = <div className={"mt-8"}>{children}</div>

    return (
        <Layout layout={ "lr" }
                slots={ {
                    left: <Nav direction={ "col" }/>,
                    right: children
                } }/>
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
