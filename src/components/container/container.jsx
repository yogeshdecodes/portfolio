import React from "react";
import styled from "styled-components";
import { node, string } from "prop-types";

const StyledContainer = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;

  ${(props) => props.theme.breakpoints.sm} {
    max-width: 540px;
  }

  ${(props) => props.theme.breakpoints.md} {
    max-width: 720px;
  }

  ${(props) => props.theme.breakpoints.lg} {
    max-width: 960px;
  }

  ${(props) => props.theme.breakpoints.xl} {
    max-width: 1140px;
  }

  ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1320px;
  }
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: node.isRequired,
  className: string,
};

Container.defaultProps = {
  className: "",
};

export default Container;
