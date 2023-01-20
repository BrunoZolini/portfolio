import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.colors.black_800};
  padding: 15px 20px;
  border: none;
  border-radius: 2px;
  outline: inherit;
  font-weight: 700;
  cursor: pointer;
`;
