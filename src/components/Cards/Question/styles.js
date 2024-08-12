import { theme } from '@/styles/theme';
import styled from 'styled-components';


export const CardContainerQuestion = styled.div`
  border-bottom: 5px solid #ddd;
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};
`;

export const QuestionName = styled.h3`
    margin-bottom: 5px;
    padding: 10px;
    border-bottom: 3px solid #ddd;
    white-space: pre-wrap;
    word-break: break-word;
`;