import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  padding: 15px 20px;
  border: none;
  border-radius: 2px;
  outline: inherit;
  cursor: pointer;
`;
