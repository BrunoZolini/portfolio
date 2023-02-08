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
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  color: ${({ theme }) => theme.colors.black_800};
  width: 80%;
  height: 34%;
  border-radius: 20px;
  padding: 20px;
  @media (min-width: 762px) {
    max-width: 540px;
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
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  width: fit-content;
  font-size: 24px;
  margin-left: 10%;
  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;
