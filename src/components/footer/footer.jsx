import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bool, func } from "prop-types";
import Container from "../container/container";
import Switch from "../switch/switch";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.footer.backgroundColor};
  color: ${(props) => props.theme.footer.color};
  padding: 3rem 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
  }
`;

const Copyright = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 0;
  }
`;

const DarkModeSwitch = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

const Footer = ({ darkMode, onDarkModeToggle }) => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Copyright>
          © Yogesh Yadav {new Date().getFullYear()}. All rights reserved.
        </Copyright>
        <DarkModeSwitch>
          <FontAwesomeIcon icon="moon" />
          <Switch
            name="darkMode"
            id="dark-mode"
            isOn={darkMode}
            onToggle={onDarkModeToggle}
          />
        </DarkModeSwitch>
      </StyledContainer>
    </StyledFooter>
  );
};

Footer.propTypes = {
  darkMode: bool.isRequired,
  onDarkModeToggle: func.isRequired,
};

export default Footer;
