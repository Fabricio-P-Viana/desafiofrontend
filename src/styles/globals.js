import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';


export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
  }
`;
