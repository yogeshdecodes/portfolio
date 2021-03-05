import React from "react";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shape, string, arrayOf } from "prop-types";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import dayjs from "dayjs";
import AvatarSmall from "../avatar/avatar-small";
import Tag from "./blog-post-tag";

const Post = styled.div`
  padding: 2rem 0;

  h1 {
    color: ${(props) => props.theme.brand.primary};
    margin-bottom: 0.5rem;
    font-size: 1.75rem;

    ${(props) => props.theme.breakpoints.md} {
      font-size: 2rem;
    }
  }

  h2 {
    color: ${(props) => props.theme.brand.primary};
    margin: 2rem 0 0.5rem 0;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Splitter = styled.hr`
  border-color: ${(props) => props.theme.typography.colors.textEmphasis};
  margin-bottom: 2rem;
`;

const PublishInfo = styled.div`
  margin-left: 0.5rem;
`;

const Name = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.125rem;
`;

const BlogPostDetail = ({ post }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x) => x.type === "code")
        ) {
          return <div>{children}</div>;
        }
        return <p>{children}</p>;
      },
    },
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <SyntaxHighlighter
            language="javascript"
            style={obsidian}
            showLineNumbers
          >
            {text}
          </SyntaxHighlighter>
        );
      },
    },
  };

  return (
    <Post>
      <h1>{post.title}</h1>
      <Author>
        <AvatarSmall />
        <PublishInfo>
          <Name>Yogesh Yadav</Name>
          <div>{dayjs(post.publishedAt).format("DD MMM YYYY")}</div>
        </PublishInfo>
      </Author>

      {post.tags.map((t) => (
        <Tag key={t} text={t} />
      ))}
      <Splitter />
      {documentToReactComponents(post.content.json, options)}
    </Post>
  );
};

BlogPostDetail.propTypes = {
  post: shape({
    title: string.isRequired,
    tags: arrayOf(string).isRequired,
    content: shape({ json: shape({}).isRequired }).isRequired,
    publishedAt: string.isRequired,
  }).isRequired,
};

export default BlogPostDetail;
