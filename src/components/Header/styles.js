import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Nav = styled.nav`
    background: ${theme.colors.primary};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        color: #fff;
        font-weight: bold;
    }
`;

export const ButtonCreateChannel = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border: none;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    font-weight: bold;
    &:hover{
        background-color: ${theme.colors.secondary};
        color:  ${theme.colors.primary};
    }
`;

