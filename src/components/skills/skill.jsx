import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { string } from "prop-types";

const StyledSkill = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.lg};

  p {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0.75rem 0;
`;

const Skill = ({ icon, title, text }) => {
  const size = "2x";

  return (
    <StyledSkill>
      <FontAwesomeIcon icon={icon} size={size} />
      <Title>{title}</Title>
      <p>{text}</p>
    </StyledSkill>
  );
};

Skill.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
};

export default Skill;
