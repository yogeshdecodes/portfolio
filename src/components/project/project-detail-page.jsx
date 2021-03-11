import React from "react";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS, INLINES  } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shape, string, arrayOf } from "prop-types";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import dayjs from "dayjs";
import AvatarSmall from "../avatar/avatar-small";
import Tag from "./project-tech";
import BlockQuote from "../BlockQuote/blockquote";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from '../getFluidGatsbyImage'

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
  }`

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
        const { file, title } = node.data.target.fields
          const image = {
            file: file['en-US'],
          }
      // const alt = node.data?.target?.fields?.title['en-US']
      // const image = node.data?.target?.fields?.file['en-US']?.url
      const fluidProps = getFluidGatsbyImage(image, { maxWidth: 720 })
      return <Image fluid={fluidProps} alt={title['en-US']} />
      // const { title, description, file } = node.data.target.fields;
      // const mimeType = file['en-US'].contentType
      // const mimeGroup = mimeType.split('/')[0]

      // switch (mimeGroup) {
      //   case 'image':
      //     return <img
      //       title={ title ? title['en-US'] : null}
      //       alt={description ?  description['en-US'] : null}
      //       src={file['en-US'].url}
      //     />
      //   case 'application':
      //     return <a
      //       alt={description ?  description['en-US'] : null}
      //       href={file['en-US'].url}
      //       >{ title ? title['en-US'] : file['en-US'].details.fileName }
      //     </a>
      //   default:
      //     return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      // }
      
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const fields = node.data.target.fields;
      switch (node.data.target.sys.contentType.sys.id) {
        case 'blockquote':
          return <div>
            <BlockQuote quoteText={fields.quoteText['en-US']} quoter={fields.quoter['en-US']}/>
          </div>
        default:
          return <div>???????????????  </div>

      }
    },
    [INLINES.HYPERLINK]: (node) => {
        if((node.data.uri).includes("player.vimeo.com/video")){
          return <IframeContainer><iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe></IframeContainer>
        } else if((node.data.uri).includes("youtube.com/embed")) {
          return <IframeContainer><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></IframeContainer>
        }else { return <a  href={node.data.uri} target="_blank" rel="noreferrer">
          {node.content[0].value}
        </a>}},
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
      {/* <Author>
        <AvatarSmall />
        <PublishInfo>
          <Name>Yogesh Yadav</Name>
          <div>{dayjs(post.publishedAt).format("DD MMM YYYY")}</div>
        </PublishInfo>
      </Author> */}

      {/* {post.technologies.map((t) => (
        <Tag key={t} text={t} />
      ))} */}
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
