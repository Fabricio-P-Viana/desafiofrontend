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
