import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../../components/seo";
import classNames from "classnames";
import Label from "../../components/label";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

const Main = ({ data }) => {
  const { nodes } = data.allMdx;
  return (
    <>
      <div className={"mb-6 mt-8 text-2xl dark:text-white"}>labels</div>
      <div>
        {nodes.map((node) => (
          <Link
            to={`/blog/${node.frontmatter.slug}`}
            style={{ textDecoration: "none" }}
            activeStyle={{}}
            className={classNames(
              "ease-in-out",
              "duration-200",
              "p-[16px]",
              "mt-[16px]",
              "mb-[24px]",
              "block",
              "bg-white",
              "border-solid",
              "border-4",
              "border-black",
              "half-shadow-[6px_6px]",
              "cursor-pointer",
              "w-[95%]",
              "max-w-[660px]",
            )}
            key={node.id}
          >
            <article>
              <h3 className={classNames("font-semibold", "text-2xl", "mb-1")}>
                {node.frontmatter.title}
              </h3>
              <p className={classNames("mb-1")}>
                Posted: {node.frontmatter.date}
              </p>
              {node.frontmatter.describe && <p>{node.frontmatter.describe}</p>}
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

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
// };

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
