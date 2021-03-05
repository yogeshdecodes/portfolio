import React from "react";
import styled from "styled-components";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";
import getSkills from "./skill-items";
import Skill from "./skill";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.section.backgroundLight};
  color: ${(props) => props.theme.typography.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0 0 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -1rem;

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Column = styled.div`
  padding: 0 1rem;

  ${(props) => props.theme.breakpoints.md} {
    width: 33.333333%;
  }
`;

const Skills = () => {
  const skills = getSkills();

  return (
    <StyledSection id="skills">
      <Container>
        <SectionHeading text="Skills" />
        <Row>
          {skills.map(({ id, icon, title, text }) => {
            return (
              <Column key={id}>
                <Skill icon={icon} title={title} text={text} />
              </Column>
            );
          })}
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Skills;
