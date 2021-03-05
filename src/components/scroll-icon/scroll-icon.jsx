import React from "react";
import styled from "styled-components";
import { string } from "prop-types";
import { Link } from "react-scroll";

const StyledScrollIcon = styled.div`
  display: none;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 16px;
  height: 50px;
  width: 30px;
  margin: 0 auto;

  ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

const Wheel = styled.div`
  animation-name: drop;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  position: relative;
  border-radius: 10px;
  background: #fff;
  width: 4px;
  height: 10px;
  top: 4px;
  margin-left: auto;
  margin-right: auto;

  @keyframes drop {
    0% {
      top: 5px;
      opacity: 0;
    }
    30% {
      top: 10px;
      opacity: 1;
    }
    100% {
      top: 25px;
      opacity: 0;
    }
  }
`;

const ScrollIcon = ({ className }) => {
  return (
    <Link to="about" spy={true} smooth={true} duration={1000}>
      <StyledScrollIcon className={className}>
        <Wheel />
      </StyledScrollIcon>
    </Link>
  );
};

ScrollIcon.propTypes = {
  className: string,
};

ScrollIcon.defaultProps = {
  className: "",
};

export default ScrollIcon;
