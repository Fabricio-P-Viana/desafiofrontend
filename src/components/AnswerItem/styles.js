import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const AnswerCard = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
  background-color: ${theme.colors.secondary}; 
  display: flex;
  flex-direction: column;
`;

export const AnswerContainer= styled.div`
  max-height: 150px;
  overflow: auto;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const AnswerScore = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const AnswerText = styled.div`
  font-size: .7rem;
  color: #333; 
  margin-top: 5px;
  white-space: pre-wrap;
  word-break: break-word;
`;
