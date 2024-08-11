import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: top; 
  min-height: 100vh;
  padding: 10px;
  background-color: ${theme.colors.background};
`;
