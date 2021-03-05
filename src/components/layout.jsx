import React from "react";
import { node } from "prop-types";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faAws,
  faHtml5,
  faCss3,
  faFigma,
  faGitAlt,
  faJs,
  faNode,
  faReact,
  faWordpress,
  faBootstrap,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCheck,
  faPalette,
  faCog,
  faCode,
  faDatabase,
  faWrench,
  faMoon,
  faChevronLeft,
  faChevronRight,
  faExternalLinkAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";
import GlobalStyle from "../themes/global-style";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import useDarkMode from "../themes/color-scheme";

library.add(
  faGithub,
  faEnvelope,
  faLinkedin,
  faStackOverflow,
  faAws,
  faHtml5,
  faCss3,
  faFigma,
  faGitAlt,
  faJs,
  faNode,
  faReact,
  faWordpress,
  faCheck,
  faPalette,
  faCog,
  faCode,
  faDatabase,
  faWrench,
  faMoon,
  faChevronLeft,
  faChevronRight,
  faBootstrap,
  faExternalLinkAlt,
  faTwitter,
  faInstagram,
  faYoutube,
  faArrowRight,
);

const Layout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer darkMode={theme === "dark"} onDarkModeToggle={toggleTheme} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
