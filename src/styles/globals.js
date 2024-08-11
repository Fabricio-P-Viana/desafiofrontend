import styled, { createGlobalStyle } from 'styled-components';
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
export const CloseButton = styled.button`
    background: ${theme.colors.primary};
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    float: right;
`;
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background: ${theme.colors.background};
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 0;
    margin-top: 10px;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
`;