import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled.span`
  font-size: 1.5rem;
  color: ${props => (props.isActive ? '#FFD700' : '#ddd')}; 
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #ffc107;
  }
`;
