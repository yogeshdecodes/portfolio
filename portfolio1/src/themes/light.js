import themeBase from "./base";

const theme = {
  ...themeBase,
  brand: {
    primary: "#ef476f",
  },
  section: {
    backgroundDark: "#f7f7f7",
    backgroundLight: "white",
  },
  typography: {
    fonts: {
      heading: "Montserrat",
      body: "Open Sans",
    },
    colors: {
      text: "#212529",
      textEmphasis: "#959595",
    },
  },
  navbar: {
    backgroundColor: "white",
    color: "#212529",
    shadow: "0 1px 6px rgba(0,0,0,.175)",
    border: "1px solid rgba(0,0,0,.125)",
  },
  footer: {
    backgroundColor: "#242526",
    color: "white",
  },
  card: {
    backgroundColor: "white",
    shadow: "0 1px 6px rgba(0,0,0,.175)",
    border: "1px solid rgba(0,0,0,.125)",
  },
  input: {
    backgroundColor: "white",
  },
  carousel: {
    dotColor: "#959595",
  },
  switch: {
    backgroundColor: "#d0d0d0",
  },
};

export default theme;
