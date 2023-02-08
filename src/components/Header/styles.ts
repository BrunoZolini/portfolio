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

export const Logo = styled.img`
  width: 54px;
  margin-left: 20px;
  border-radius: 100px;
  box-shadow: 0 0 16px ${({ theme }) => theme.colors.gray_50};
  &:hover {
    box-shadow: 0 0 16px ${({ theme }) => theme.primary};
  }
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

export const PlayerWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  max-width: 180px;
`;

export const ChangeLanguage = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  &:focus-within {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

export const Select = styled.select`
  background-color: transparent;
  border: none;
  color: inherit;
  outline: none;
  padding-left: 20px;
  &:focus {
    border: none;
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Option = styled.option`
  background-color: ${({ theme }) => theme.muted};
  color: ${({ theme }) => theme.colors.gray_50};
`;

export const ChangeMode = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: transparent;
  border: none;
  color: inherit;
  outline: inherit;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

export const EmailIcon = styled(MdEmail)`
  font-size: 16px;
`;

export const LanguageIcon = styled(MdLanguage)`
  position: fixed;
  font-size: 16px;
`;

export const LightThemeIcon = styled(MdOutlineLightMode)`
  font-size: 16px;
`;

export const DarkThemeIcon = styled(MdOutlineDarkMode)`
  font-size: 16px;
`;
