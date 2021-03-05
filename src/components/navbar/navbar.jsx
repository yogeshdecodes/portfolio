import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import Burger from "./burger";
import Menu from "./menu";
import Container from "../container/container";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: ${(props) => (props.isAtTop ? "1.75rem" : "0.75rem")};
  padding-bottom: ${(props) => (props.isAtTop ? "1.75rem" : "0.75rem")};
  transition: 0.3s ease-out;
  background-color: ${(props) => props.theme.navbar.backgroundColor};
  border-bottom: ${(props) => props.theme.navbar.border};
  box-shadow: ${(props) => props.theme.navbar.shadow};

  ${(props) =>
    props.isAtTop &&
    !props.isBurgerActive &&
    css`
      background-color: transparent;
      border-bottom: none;
      box-shadow: none;
    `}

  a {
    color: ${(props) => props.theme.navbar.color};

    ${(props) =>
      props.isAtTop &&
      !props.isBurgerActive &&
      css`
        color: white;
        :visited {
          color: white;
        }
      `}
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled(Link)`
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  color: ${(props) => props.theme.navbar.color};

  :visited {
    color: ${(props) => props.theme.navbar.color};
  }
`;

const Navbar = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      const top = window.pageYOffset === 0;
      setIsAtTop(top);
    };
  }, []);

  const onBurgerClick = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <StyledNav
      role="navigation"
      aria-label="main navigation"
      isAtTop={isAtTop}
      isBurgerActive={isBurgerActive}
    >
      <StyledContainer>
        <Brand to="/">YD</Brand>
        <Burger onClick={onBurgerClick} isAtTop={isAtTop} />
        <Menu isOpen={isBurgerActive} />
      </StyledContainer>
    </StyledNav>
  );
};

export default Navbar;
