import React, { useState } from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";

const StyledBurger = styled.button`
  cursor: pointer;
  display: block;
  height: 2.5rem;
  position: relative;
  width: 2.5rem;
  margin-left: auto;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(props) =>
    props.isAtTop && !props.active ? "white" : props.theme.navbar.color};
  border-radius: 0.25rem;
  color: ${(props) =>
    props.isAtTop && !props.active ? "white" : props.theme.navbar.color};

  :focus {
    outline-color: ${(props) => props.theme.brand.primary};
  }

  ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  span {
    background-color: currentColor;
    display: block;
    height: 2px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 100ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;

    :nth-child(1) {
      top: calc(50% - 6px);
      transform: ${(props) =>
        props.active ? "translateY(5px) rotate(45deg)" : "none"};
    }

    :nth-child(2) {
      top: calc(50% - 1px);
      opacity: ${(props) => (props.active ? 0 : 1)};
    }

    :nth-child(3) {
      top: calc(50% + 4px);
      transform: ${(props) =>
        props.active ? "translateY(-5px) rotate(-45deg)" : "none"};
    }
  }
`;

const Burger = ({ onClick, isAtTop }) => {
  const [isActive, setIsActive] = useState(false);

  const onBurgerClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <StyledBurger
      role="button"
      type="button"
      aria-label="menu"
      aria-expanded="false"
      onClick={onBurgerClick}
      active={isActive}
      isAtTop={isAtTop}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </StyledBurger>
  );
};

Burger.propTypes = {
  onClick: func.isRequired,
  isAtTop: bool,
};

Burger.defaultProps = {
  isAtTop: false,
};

export default Burger;
