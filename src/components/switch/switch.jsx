import React from "react";
import styled from "styled-components";
import { string, bool, func } from "prop-types";

const StyledSwitch = styled.div`
  position: relative;
  line-height: 0.75;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.6875rem;
  height: 1.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.switch.backgroundColor};
  transition: 0.3s;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    background: white;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 1rem;
  width: 2.6875rem;
  height: 1.5rem;
  &:checked + ${Label} {
    background: ${(props) => props.theme.brand.primary};
    transition: 0.3s;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 1.125rem;
    }
  }
`;

const Switch = ({ name, id, isOn, onToggle }) => {
  return (
    <StyledSwitch>
      <Checkbox
        type="checkbox"
        name={name}
        id={id}
        checked={isOn}
        onChange={onToggle}
      />
      <Label htmlFor={id} />
    </StyledSwitch>
  );
};

Switch.propTypes = {
  name: string.isRequired,
  id: string.isRequired,
  isOn: bool,
  onToggle: func,
};

Switch.defaultProps = {
  isOn: false,
  onToggle: () => {},
};

export default Switch;
