import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const QuestionsContainer = styled.div`
  padding: 10px;
  max-width: 800px;
  margin: 0 auto; 
`;

export const QuestionsListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const QuestionContainer = styled.li`
  margin-bottom: 15px; 
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${theme.colors.secondary};
`;

export const QuestionText = styled.h3`
  font-size: 1.2em; 
  margin: 0 0 10px; 
  color: ${theme.colors.primary}; 
`;

export const EmptyMessage = styled.p`
  color: ${theme.colors.text}; 
  text-align: center; 
`;

export const ErrorMessage = styled.p`
  color: ${theme.colors.error}; 
  text-align: center;
`;

export const LoadingMessage = styled.p`
  color: ${theme.colors.primary};
  text-align: center;
`;
