import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const QuestionsContainer = styled.div`
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
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${theme.colors.secondary};
`;

export const QuestionText = styled.h3`
  font-size: 1.2em; 
  margin: 0 0 10px; 
  color: ${theme.colors.primary}; 
`;

export const ButtonCreateQuestion = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border: none;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    font-weight: bold;
`;