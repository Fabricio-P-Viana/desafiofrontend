import { theme } from '@/styles/theme';
import styled from 'styled-components';


export const CardContainerQuestion = styled.div`
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};
`;

export const QuestionName = styled.h3`
    margin: 5px 0 10px 0;
    padding: 10px;
    font-size: .9rem;
    white-space: pre-wrap;
    word-break: break-word;
`;