import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) =>
      props.theme.typography.fonts
        .body}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background-color: ${(props) => props.theme.footer.backgroundColor};
    overflow: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) =>
      props.theme.typography.fonts
        .heading}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;;
    margin-top: 0;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1rem;
   
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.brand.primary};
    transition: color 0.3s ease-in-out;

    :visited, :active {
      color: ${(props) => props.theme.brand.primary};
    }

    :hover {
      color: ${(props) => props.theme.typography.colors.textEmphasis};
    }
  }

  section {
    transition: all 0.3s ease-in-out;
  }

  ::selection {
  color: red;
  background: pink;
}
`;

export default GlobalStyle;
