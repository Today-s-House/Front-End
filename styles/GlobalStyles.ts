import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body,html{
      font-size:16px;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
    }
`;

export default GlobalStyle;
