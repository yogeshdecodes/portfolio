import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

const StyledHeading = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  line-height: 1.2;
  text-align: center;

  ${(props) => props.theme.breakpoints.md} {
    font-size: 2.5rem;
  }
`;

const SectionHeading = ({ text }) => {
  return <StyledHeading>{text}</StyledHeading>;
};

SectionHeading.propTypes = {
  text: string.isRequired,
};

export default SectionHeading;
