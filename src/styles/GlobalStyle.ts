import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter';
    font-size: 16px;
    color: #E1E1E6;
  }
  button {
    font-family: 'Inter';
    cursor: pointer;
  }
`;

export default GlobalStyle;
