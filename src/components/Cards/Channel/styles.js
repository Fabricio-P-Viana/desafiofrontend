import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flexbox;
  flex-direction: row; 
  align-items: flex-start; 
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: ${theme.colors.secondary};
  min-width: 250px;
  max-width: 800px;
  width: 90%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height : 300px;
  overflow: auto;
  overflow-y: scroll;
`;

export const ChannelName = styled.h2`
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: ${theme.colors.primary}; 
  font-weight: bold; 
`;
