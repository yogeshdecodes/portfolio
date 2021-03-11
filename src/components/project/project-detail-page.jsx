import React from "react";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shape, string, arrayOf } from "prop-types";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "../getFluidGatsbyImage";

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

const Splitter = styled.hr`
  border-color: ${(props) => props.theme.typography.colors.textEmphasis};
  margin-bottom: 2rem;
`;

const Image = styled(Img)`
  border: 8px solid white;
`;

const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyleBlockQuote = styled.div`
  border-left: 6px solid rgb(239, 71, 111);
  padding: 15px 15px 15px 20px;
  border-radius: 5px;
  font-style:italic;
  background:${(props) => props.theme.section.backgroundDark};
`;

const ProjectDetailPage = ({ post }) => {
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
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        const image = {
          file: file["en-US"],
        };
        const fluidProps = getFluidGatsbyImage(image, { maxWidth: 720 });
        return <Image fluid={fluidProps} alt={title["en-US"]} />;
      },
      [BLOCKS.QUOTE]: (node, children) => {
        console.log(children);
        return <StyleBlockQuote>{children}</StyleBlockQuote>;
        // const fields = node.data.target.fields;
        // switch (node.data.target.sys.contentType.sys.id) {
        //   case 'blockquote':
        //     return <div>
        //       <BlockQuote quoteText={fields.quoteText['en-US']} quoter={fields.quoter['en-US']}/>
        //     </div>
        //   default:
        //     return <div>???????????????  </div>}
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.includes("player.vimeo.com/video")) {
          return (
            <IframeContainer>
              <iframe
                title="Unique Title 001"
                src={node.data.uri}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          );
        } else if (node.data.uri.includes("youtube.com/embed")) {
          return (
            <IframeContainer>
              <iframe
                title="Unique Title 002"
                src={node.data.uri}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          );
        } else {
          return (
            <a href={node.data.uri} target="_blank" rel="noreferrer">
              {node.content[0].value}
            </a>
          );
        }
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
      <Splitter />
      {documentToReactComponents(post.content.json, options)}
    </Post>
  );
};

ProjectDetailPage.propTypes = {
  post: shape({
    title: string.isRequired,
    tags: arrayOf(string).isRequired,
    content: shape({ json: shape({}).isRequired }).isRequired,
    publishedAt: string.isRequired,
  }).isRequired,
};

export default ProjectDetailPage;
