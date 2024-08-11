import { theme } from '@/styles/theme';
import styled from 'styled-components';


export const CardContainerQuestion = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: ${theme.colors.secondary};
`;

export const QuestionName = styled.h2`
    margin-bottom: 15px;
`;