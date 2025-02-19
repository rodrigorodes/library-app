import styled from 'styled-components';

export const BookWrapper = styled.div`
  background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const BookTitle = styled.h3`
  font-size: 1.4rem;
  color: #222;
  font-weight: 600;
  margin-bottom: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #0070f3;
  }
`;

export const BookDetails = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 3px 0;
`;

export const BookDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  margin-top: 8px;
`;

export const BookLink = styled.a`
  text-decoration: none;
`;
