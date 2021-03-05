import themeBase from "./base";

const theme = {
  ...themeBase,
  brand: {
    primary: "#ef476f",
  },
  section: {
    backgroundDark: "#101112",
    backgroundLight: "#18191a",
  },
  typography: {
    fonts: {
      heading: "Montserrat",
      body: "Open Sans",
    },
    colors: {
      text: "#b0b3b8",
      textEmphasis: "#e4e6eb",
    },
  },
  navbar: {
    backgroundColor: "#242526",
    color: "white",
    shadow: "0 0 0 rgba(0,0,0,0)",
    border: "1px solid #3e4042",
  },
  footer: {
    backgroundColor: "#242526",
    color: "#b0b3b8",
  },
  card: {
    backgroundColor: "#242526",
    shadow: "0 0 0 rgba(0,0,0,0)",
    border: "1px solid rgba(0,0,0,0)",
  },
  input: {
    backgroundColor: "3a3b3c",
  },
  carousel: {
    dotColor: "#b0b3b8",
  },
  switch: {
    backgroundColor: "3a3b3c",
  },
};

export default theme;
