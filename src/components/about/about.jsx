import React from "react";
import styled from "styled-components";
import Container from "../container/container";
import Portrait from "./portrait";
import AboutText from "./about-text";
import SectionHeading from "../typography/section-heading";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.section.backgroundDark};
  color: ${(props) => props.theme.typography.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }
`;

const ImageColumn = styled.div`
  width: 100%;

  ${(props) => props.theme.breakpoints.md} {
    width: 35%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 25%;
  }
`;

const TextColumn = styled.div`
  width: 100%;
  margin-top: 1rem;

  ${(props) => props.theme.breakpoints.md} {
    width: 65%;
    padding-left: 2rem;
    margin-top: 0;
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 75%;
  }
`;

const About = () => {
  return (
    <StyledSection id="about">
      <Container>
        <SectionHeading text="About Me" />
        <Row>
          <ImageColumn>
            <Portrait />
          </ImageColumn>
          <TextColumn>
            <AboutText />
          </TextColumn>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default About;
