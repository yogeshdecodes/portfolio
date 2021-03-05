import React from "react";
import styled, { css } from "styled-components";
import { string, shape, bool, arrayOf } from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";
import dayjs from "dayjs";
import Tag from "./blog-post-tag";

const StyledBlogPostSummary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.card.backgroundColor};
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  box-shadow: ${(props) => props.theme.card.shadow};
`;

const Content = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const Header = styled.div`
  overflow: hidden;
`;

const HeaderImage = styled(Img)`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  ${(props) =>
    props.magnifyEffect &&
    css`
      transition: all 0.3s ease;

      :hover {
        transform: scale(1.25);
      }
    `}
`;

const Date = styled.p`
  color: ${(props) => props.theme.typography.colors.textEmphasis};
`;

const ReadMoreLink = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
`;

const BlogPostSummary = ({
  title,
  slug,
  text,
  date,
  headerImage,
  className,
  magnifyEffect,
  tags,
}) => {
  const url = `/blog/${slug}/`;
  return (
    <StyledBlogPostSummary className={className}>
      <Header>
        <Link to={url}>
          <HeaderImage
            fluid={headerImage.fluid}
            alt={headerImage.title}
            magnifyEffect={magnifyEffect}
          />
        </Link>
      </Header>
      <Content>
        <h3>{title}</h3>
        <Date>{dayjs(date).format("DD MMM YYYY")}</Date>
        {tags.length > 0 ? tags.map((t) => <Tag key={t} text={t} />) : null}
        <p>{text}</p>
        <ReadMoreLink to={url}>Read more</ReadMoreLink>
      </Content>
    </StyledBlogPostSummary>
  );
};

BlogPostSummary.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  text: string.isRequired,
  date: string.isRequired,
  headerImage: shape({ fluid: shape({}).isRequired }).isRequired,
  tags: arrayOf(string),
  className: string,
  magnifyEffect: bool,
};

BlogPostSummary.defaultProps = {
  className: "",
  magnifyEffect: false,
  tags: [],
};

export default BlogPostSummary;
