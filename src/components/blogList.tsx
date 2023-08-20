import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import Button from "./button";

const BlogList = ({ data }) => {
  return (
    <div>
      {data.allMdx.nodes.map((node) => (
        <Link
          to={`/blog/${node.frontmatter.slug}`}
          className={classNames(
            "rect-border",
            "p-[16px]",
            "mt-[16px]",
            "mb-[24px]",
            "block",
            "bg-white",
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
                // <Label key={label} text={label} />
                <Button className={"--x-label"} href={""} type={"link"}>
                  {label}
                </Button>
              ))}
          </article>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
