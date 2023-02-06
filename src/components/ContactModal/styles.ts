import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.black_800}80;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  color: ${({ theme }) => theme.colors.black_800};
  width: 80%;
  height: 30%;
  border-radius: 20px;
  @media (min-width: 762px) {
    max-width: 500px;
  }
`;

export const Close = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 8px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 30px;
  margin-left: 10%;
  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;
