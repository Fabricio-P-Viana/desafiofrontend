import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const AnswerContainer = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary}; 
  display: flex;
  flex-direction: column;
`;

export const AnswerScore = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const AnswerText = styled.div`
  font-size: 1rem;
  color: #333; 
  margin-top: 5px;
`;
