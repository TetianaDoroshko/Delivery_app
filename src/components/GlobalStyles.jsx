import { createGlobalStyle } from "styled-components";
// import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif ;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p, ul {
    margin: 0;
    padding: 0;
  }
`;
