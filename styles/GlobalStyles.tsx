import { createGlobalStyle } from "styled-components";
import { dark } from "../theme";
import { light } from "../theme";

interface IGlobalStyles {
  theme: typeof dark | typeof light;
}

export const GlobalStyles = createGlobalStyle<IGlobalStyles>`
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
       
        font-family: 'Open Sans', sans-serif;
        transition: all 0.50s linear;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
       
    }
          
`;

export default GlobalStyles;
