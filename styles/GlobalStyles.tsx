import { createGlobalStyle } from 'styled-components'
import { dark } from '../theme'
import { light } from '../theme'

interface IGlobalStyles {
  theme: typeof dark | typeof light
}

export const GlobalStyles = createGlobalStyle<IGlobalStyles>`
    body {
       font-family: 'Open Sans', sans-serif;       
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.backgroundColor};
        width: 100%;
        min-height: 100vh;
        transition: background-color 0.3s ease;
    }

    * {
        box-sizing: border-box;
       
    }
          
`

export default GlobalStyles
