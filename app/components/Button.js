import styled from 'styled-components';

const GenericButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ $bgColor }) => $bgColor || '#007bff'};  
  color: ${({ $textColor }) => $textColor || 'white'};           
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor || '#0056b3'}; 
  }
`;

export default GenericButton;
