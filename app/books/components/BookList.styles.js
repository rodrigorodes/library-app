import styled from 'styled-components';

export const BookListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 30%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ variant }) => (variant === "clear" ? "#dc3545" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) => (variant === "clear" ? "#b52b3a" : "#0056b3")};
  }
`;
