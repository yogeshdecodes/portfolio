import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import getTechnologies from "./technology-items";
import Technology from "./technology";
import Container from "../container/container";

const StyledTechnologies = styled(BackgroundImage)`
  padding: 12rem 0 10rem 0;
  background-repeat: no-repeat;
  background-position: 80% 0;
  background-size: cover;   
  :after,
  :before {
    ${(props) => props.theme.breakpoints.xl} {
      background-attachment: fixed;
    }
  }
`;

const TechnologyList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

 

const Technologies = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "stowe.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1920
            quality: 100
            formats: [AUTO, WEBP]
            placeholder: BLURRED
            )
        }
      }
    }
  `);

  const technologies = getTechnologies();

  return (
    <StyledTechnologies
      Tag="section"
      fluid={data.backgroundImage.childImageSharp.fluid}
      backgroundColor="#040e18"
    > 
      <Container>
        <TechnologyList>
          {technologies.map(({ id, icon }) => {
            return <Technology key={id} icon={icon} />;
          })}
        </TechnologyList>
      </Container>
    </StyledTechnologies>
  );
};

export default Technologies;
