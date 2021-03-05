import React from "react";
import styled from "styled-components";
import { arrayOf, shape, string } from "prop-types";
import { Link } from "gatsby";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";
import BlogPostSummary from "./blog-post-summary";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.section.backgroundDark};
  color: ${(props) => props.theme.typography.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0 3rem 0;
`;

const Deck = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.lg} {
    flex-flow: row wrap;
    margin: 0 -1rem;
  }
`;

const StyledBlogPostSummary = styled(BlogPostSummary)`
  ${(props) => props.theme.breakpoints.lg} {
    flex: 1 0 0%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Links = styled.div`
  text-align: center;
  margin: 1rem 0 2rem 0;

  a {
    border: 1px solid ${(props) => props.theme.brand.primary};
    color: ${(props) => props.theme.brand.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    :hover {
      background-color: ${(props) => props.theme.brand.primary};
      color: white;

      :visited {
        color: white;
      }
    }

    :visited {
      color: ${(props) => props.theme.brand.primary};
    }
  }
`;

const Blog = ({ posts }) => {
  return (
    <StyledSection id="blog">
      <Container>
        <SectionHeading text="Blog" />
        <Deck>
          {posts.map(({ node }) => {
            return (
              <StyledBlogPostSummary
                key={node.slug}
                text={node.summary.summary}
                slug={node.slug}
                title={node.title}
                date={node.publishedAt}
                headerImage={node.headerImage}
                magnifyEffect
              />
            );
          })}
        </Deck>
        <Links>
          <Link to="/blog">More Posts</Link>
        </Links>
      </Container>
    </StyledSection>
  );
};

Blog.propTypes = {
  posts: arrayOf(
    shape({
      node: shape({
        title: string,
        slug: string,
        date: string,
        headerImage: shape({ fluid: shape({}), title: string }),
      }),
    })
  ).isRequired,
};

export default Blog;
