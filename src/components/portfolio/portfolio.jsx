import React from "react";
import styled from "styled-components";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";
import PortfolioCarousel from "./portfolio-carousel";
import { Link } from "gatsby";

const Links = styled.div`
  text-align: center;
  

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

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.section.backgroundLight};
  color: ${(props) => props.theme.typography.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0;
`;

const Portfolio = () => {
  return (
    <StyledSection id="portfolio">
      <Container>
        <SectionHeading text="Projects" />
        <PortfolioCarousel />
        <Links>
          <Link to="/project">All Projects</Link>
        </Links>
      </Container>
    </StyledSection>
  );
};

export default Portfolio;
