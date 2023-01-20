import {
  MdEmail,
  MdLanguage,
  MdOutlineDarkMode,
  MdOutlineLightMode
} from 'react-icons/md';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.secondary};
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.secondary},
    ${({ theme }) => theme.muted}
  );
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10%;
  color: ${({ theme }) => theme.colors.gray_50};
  font-weight: 400;
`;

export const LeftContainer = styled.nav`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  margin-left: 10%;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

export const RightContainer = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-left: 10%;
`;

export const Select = styled.select`
  background-color: transparent;
  border: none;
  color: inherit;
  outline: none;
  :focus {
    border: none;
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ChangeMode = styled.button`
  display: flex;
  gap: 3px;
  align-items: center;
  background-color: transparent;
  border: none;
  color: inherit;
  border-radius: 2px;
  outline: inherit;
  cursor: pointer;
`;

export const ChangeLanguage = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const EmailIcon = styled(MdEmail)`
  fill: ${({ theme }) => theme.colors.black_800};
  font-size: 16px;
`;

export const LanguageIcon = styled(MdLanguage)`
  fill: ${({ theme }) => theme.colors.gray_50};
  font-size: 16px;
`;

export const LightThemeIcon = styled(MdOutlineLightMode)`
  fill: ${({ theme }) => theme.colors.gray_50};
  font-size: 16px;
`;

export const DarkThemeIcon = styled(MdOutlineDarkMode)`
  fill: ${({ theme }) => theme.colors.gray_50};
  font-size: 16px;
`;
