import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0;
  height: 80vh;
  gap: 4px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.colors.gray_50};
  height: 100%;
  box-shadow: ${({ theme }) => theme.text} 0 0 6px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin: 10px;
`;

interface ButtonProps {
  direction: string;
}

export const Button = styled.button<ButtonProps>`
  height: 80px;
  background-image: linear-gradient(
    to ${({ direction }) => direction},
    ${({ theme }) => theme.secondary},
    ${({ theme }) => theme.muted}
  );
  border: none;
  color: ${({ theme }) => theme.colors.gray_50};
  outline: none;
  width: 40px;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      to ${({ direction }) => direction},
      ${({ theme }) => theme.muted},
      ${({ theme }) => theme.highlight}
    );
  }
`;

export const Prev = styled(BsChevronLeft)`
  font-size: 30px;
`;
export const Next = styled(BsChevronRight)`
  font-size: 30px;
`;
