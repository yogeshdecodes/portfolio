/* eslint-disable react/prop-types */
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import darkTheme from "./src/themes/dark";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
