import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
`;

export const LeftContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const NavLink = styled.a`
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;

export const Select = styled.select`
  background-color: ${({ theme }) => theme.background};
  border: none;
  outline: none;
  :focus {
    border: none;
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export const ChangeMode = styled.button`
  display: flex;
  gap: 3px;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  outline: inherit;
  cursor: pointer;
`;

export const ChangeLanguage = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
