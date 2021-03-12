import React from "react";
import { graphql } from "gatsby";
import { shape, arrayOf } from "prop-types";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogBanner from "../components/blog/blog-banner";
import Container from "../components/container/container";
import BlogPostSummary from "../components/blog/blog-post-summary";
import Avatar from "../components/avatar/avatar";
import SocialMedia from "../components/social-media/social-media";

const Section = styled.section`
  background-color: ${(props) => props.theme.section.backgroundDark};
  color: ${(props) => props.theme.typography.colors.text};
  padding: 3rem 0 3rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }
`;

const PostsColumn = styled.div`
  width: 100%;

  ${(props) => props.theme.breakpoints.md} {
    padding-right: 2rem;
    width: 70%;
  }
`;

const AuthorColumn = styled.div`
  width: 100%;

  ${(props) => props.theme.breakpoints.md} {
    width: 30%;
  }
`;

const Author = styled.div`
  text-align: center;

  ${(props) => props.theme.breakpoints.md} {
    position: sticky;
    top: 6rem;
  }

  h1 {
    margin-top: 1.5rem;
    color: ${(props) => props.theme.brand.primary};
  }
`;

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <BlogBanner image={data.bannerImage.childImageSharp} />
    <Section>
      <Container>
        <Row>
          <PostsColumn>
            {data.blogPosts.edges.map(({ node }) => {
              return (
                <BlogPostSummary
                  key={node.slug}
                  text={node.summary.summary}
                  slug={node.slug}
                  title={node.title}
                  date={node.publishedAt}
                  headerImage={node.headerImage}
                  tags={node.tags}
                />
              );
            })}
          </PostsColumn>
          <AuthorColumn>
            <Author>
              <Avatar />
              <h1>Yogesh Yadav</h1>
              <p>
                Hi, I&apos;m Yogesh. I&apos;m a full stack software developer
                from India. When I&apos;m not
                making web applications, I&apos;m exploring
                new places.
              </p>
              <SocialMedia />
            </Author>
          </AuthorColumn>
        </Row>
      </Container>
    </Section>
  </Layout>
);

BlogPage.propTypes = {
  data: shape({
    blogPosts: shape({
      edges: arrayOf(shape({ node: shape({}) })),
    }),
  }).isRequired,
};

export default BlogPage;

export const query = graphql`
  query {
    bannerImage: file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blogPosts: allContentfulBlogPost(
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          publishedAt
          title
          slug
          tags
          summary {
            summary
          }
          headerImage {
            title
            fluid(quality: 95) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
