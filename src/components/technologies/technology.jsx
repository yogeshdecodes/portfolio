import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { string, arrayOf } from "prop-types";

const StyledTechnology = styled.li`
  display: block;
  color: white;
  margin: 0 1.25rem 2rem 1.25rem;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${(props) => props.theme.brand.primary};
  }
`;

const Technology = ({ icon }) => {
  const size = "5x";

  return (
    <StyledTechnology>
      <FontAwesomeIcon icon={icon} size={size} fixedWidth />
    </StyledTechnology>
  );
};

Technology.propTypes = {
  icon: arrayOf(string).isRequired,
};

export default Technology;
