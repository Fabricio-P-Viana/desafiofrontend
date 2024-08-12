import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const AnswerCard = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid white;
  border-radius: 4px;
`;

export const AnswerContainer= styled.div`
  max-height: 150px;
  overflow: auto;
  background-color: #dedede;
  overflow-y: auto;
  border-radius: 4px;
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
