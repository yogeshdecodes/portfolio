import React from "react";
import { graphql, Link } from "gatsby";
import { string, shape, arrayOf } from "prop-types";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container/container";
import ProjectDetailPage from "../components/project/project-detail-page";
import ProjectBanner from "../components/project/project-banner";

const Section = styled.section`
  background-color: ${(props) => props.theme.section.backgroundLight};
  color: ${(props) => props.theme.typography.colors.text};
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
`;

const ProjectLink = styled.div`
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

const ProjectDetail = ({ data }) => {
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
      <ProjectBanner image={post.image} />
      <Section>
        <Container>
          <ProjectDetailPage post={post} />
          <Splitter />
          <Links>
            {previousPost ? (
              <ProjectLink>
                <div>&lt;</div>
                <div>
                  <Link to={`/project/${previousPost.node.slug}`}>
                    {previousPost.node.title}
                  </Link>
                </div>
              </ProjectLink>
            ) : (
              <div />
            )}
            {nextPost ? (
              <ProjectLink>
                <div>
                  <Link to={`/project/${nextPost.node.slug}`}>
                    {nextPost.node.title}
                  </Link>
                </div>
                <div>&gt;</div>
              </ProjectLink>
            ) : null}
          </Links>
        </Container>
      </Section>
    </Layout>
  );
};

ProjectDetail.propTypes = {
  data: shape({
    post: shape({
      title: string.isRequired,
      // content: shape({ json: shape({}).isRequired }).isRequired,
      publishedAt: string.isRequired,
      headerImage: shape({}).isRequired,
    }).isRequired,
    posts: shape({
      edges: arrayOf(shape({ node: shape({ title: string, slug: string }) })),
    }),
  }).isRequired,
};

export default ProjectDetail;

export const query = graphql`
  query($slug: String!) {
    posts: allContentfulPortfolioItem  {
      edges {
        node {
          title
          slug
        }
      }
    }
    post: contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      slug 
      technologies
      bodyRichText  {
        raw
      }
      image {
        title
        fluid(quality: 95) {
          gatsbyImageData(
              layout: FULL_WIDTH
              quality: 95
              formats: [AUTO, WEBP]
              placeholder: BLURRED
              )
           
        }
      }
    }
  }
`;
