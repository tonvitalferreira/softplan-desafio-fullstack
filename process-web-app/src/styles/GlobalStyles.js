import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin:0;
    padding:0;
}

  html, body, #root{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
    height: 100%;
    width: 100%;
    
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  
  input, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
  }

  :root {
    --color-white: #fff;
    --color-primary: #003761;
    --color-primary-light: #1f7ccc;
    --color-text: #003761;
    --color-text-placeholder: #345268;
    --color-accent: #FA782D;
    --color-input-bg: #EDEDED;
    --color-separator: #CCCCCC;
    --color-button-bg: #003761;
    --color-button-bg-hover: #004B87;
    --color-red: #d92558;
    --color-green: #1db345;
    --color-green-dark: #13782e;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 55, 97);
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  
`;
