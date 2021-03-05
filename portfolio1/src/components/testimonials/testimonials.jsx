import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";
import Testimonial from "./testimonial";

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

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      items: allContentfulTestimonial(limit: 3) {
        edges {
          node {
            name
            role
            text {
              text
            }
            image {
              title
              fixed(height: 50, quality: 95) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const { edges: testimonials } = data.items;

  return (
    <StyledSection id="testimonials">
      <Container>
        <SectionHeading text="Testimonials" />
        <Deck>
          {testimonials.map(({ node }) => {
            return (
              <Testimonial
                key={node.name}
                image={node.image}
                title={node.role}
                name={node.name}
                text={node.text.text}
              />
            );
          })}
        </Deck>
      </Container>
    </StyledSection>
  );
};

export default Testimonials;
