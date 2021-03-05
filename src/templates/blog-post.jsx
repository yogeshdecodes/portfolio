import React from "react";
import { graphql, Link } from "gatsby";
import { string, shape, arrayOf } from "prop-types";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container/container";
import BlogPostDetail from "../components/blog/blog-post-detail";
import BlogBanner from "../components/blog/blog-banner";

const Section = styled.section`
  background-color: ${(props) => props.theme.section.backgroundLight};
  color: ${(props) => props.theme.typography.colors.text};
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
`;

const BlogLink = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  color: ${(props) => props.theme.brand.primary};

  :last-of-type {
    text-align: right;
  }

  div:first-child {
    margin-right: 0.75rem;
  }
`;

const Splitter = styled.hr`
  border-color: ${(props) => props.theme.typography.colors.textEmphasis};
`;

const BlogPost = ({ data }) => {
  const { post } = data;
  const { edges: posts } = data.posts;

  let index = 0;

  for (let i = 0; i < posts.length; i += 1) {
    if (post.slug === posts[i].node.slug) {
      index = i;
      break;
    }
  }

  const previousPost = posts[index + 1];
  const nextPost = posts[index - 1];

  return (
    <Layout>
      <SEO title={post.title} />
      <BlogBanner image={post.headerImage} />
      <Section>
        <Container>
          <BlogPostDetail post={post} />
          <Splitter />
          <Links>
            {previousPost ? (
              <BlogLink>
                <div>&lt;</div>
                <div>
                  <Link to={`/blog/${previousPost.node.slug}`}>
                    {previousPost.node.title}
                  </Link>
                </div>
              </BlogLink>
            ) : (
              <div />
            )}
            {nextPost ? (
              <BlogLink>
                <div>
                  <Link to={`/blog/${nextPost.node.slug}`}>
                    {nextPost.node.title}
                  </Link>
                </div>
                <div>&gt;</div>
              </BlogLink>
            ) : null}
          </Links>
        </Container>
      </Section>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: shape({
    post: shape({
      title: string.isRequired,
      content: shape({ json: shape({}).isRequired }).isRequired,
      publishedAt: string.isRequired,
      headerImage: shape({}).isRequired,
    }).isRequired,
    posts: shape({
      edges: arrayOf(shape({ node: shape({ title: string, slug: string }) })),
    }),
  }).isRequired,
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    posts: allContentfulBlogPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedAt
      tags
      content {
        json
      }
      headerImage {
        title
        fluid(quality: 95) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
