import React from "react";
import { graphql } from "gatsby";
import { shape, arrayOf } from "prop-types";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectBanner from "../components/project/project-banner";
import Container from "../components/container/container";
import Avatar from "../components/avatar/avatar";
import SocialMedia from "../components/social-media/social-media";
import ProjectCard from "../components/project/project-card";
 

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

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Project" />
    <ProjectBanner image={data.bannerImage.childImageSharp} />
    <Section>
      <Container>
        <Row>
          <PostsColumn>
            {data.items.edges.map(({ node }) => {
              return ( 
                <ProjectCard
                  // key={node.slug}
                  text={node.text.text}
                  // slug={node.slug}
                  title={node.title}
                  // date={node.publishedAt}
                  headerImage={node.image}
                  tags={node.technologies}
                  url={node.url}
                  github={node.github}
                  slug={node.slug}
                >   </ProjectCard>
                 
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
                the world.
              </p>
              <SocialMedia />
            </Author>
          </AuthorColumn>
        </Row>
      </Container>
    </Section>
  </Layout>
);

ProjectPage.propTypes = {
  data: shape({
    blogPosts: shape({
      edges: arrayOf(shape({ node: shape({}) })),
    }),
  }).isRequired,
};

export default ProjectPage;

export const query = graphql`
  query {
    bannerImage: file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            layout: CONSTRAINED
            width: 1920
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: BLURRED
            ) 
      }
    }
    items: allContentfulPortfolioItem {
      edges {
        node {
         title
         slug
            url
            github
            text {
              text
            }
            technologies
            order
            image {
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
