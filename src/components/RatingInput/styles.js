import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;
