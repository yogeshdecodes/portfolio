import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";
import { Link } from "gatsby";
import getMenuItems from "./menu-items";

const StyledMenu = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  align-items: center;
  width: 100%;

  ${(props) => props.theme.breakpoints.md} {
    display: flex;
    width: auto;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }

  a {
    cursor: pointer;
    font-family: ${(props) => props.theme.typography.fonts.heading};
    font-size: 0.875rem;
    display: block;
    line-height: 1.4;
    padding: 0.5rem 0;
    text-transform: uppercase;
    text-decoration: none;

    :visited {
      color: ${(props) => props.theme.navbar.color};
    }

    :hover {
      color: ${(props) => props.theme.brand.primary};
    }

    &.active {
      color: ${(props) => props.theme.brand.primary};
    }

    ${(props) => props.theme.breakpoints.md} {
      padding: 0.5rem 1rem;

      :last-child {
        padding-right: 0;
      }
    }
  }
`;

const Menu = ({ isOpen }) => {
  const menuItems = getMenuItems();

  return (
    <StyledMenu active={isOpen}>
      <Links>
        {menuItems.map(({ id, to, text }) => {
          return (
            <Link key={id} to={to} activeClassName="active">
              {text}
            </Link>
          );
        })}
      </Links>
    </StyledMenu>
  );
};

Menu.propTypes = {
  isOpen: bool,
};

Menu.defaultProps = {
  isOpen: false,
};

export default Menu;
