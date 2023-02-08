import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useSelectedTheme } from '../../contexts';
import Button from '../Button';
import ContactModal from '../ContactModal';
import * as S from './styles';

export default function Header() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const darkThemeOn = selectedTheme === 'dark';

  const handleNavigate = (id: string) => {
    const element = document.querySelector(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.pageXOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <S.Header>
      <S.NavLink onClick={() => handleNavigate('#about')}>
        <S.Logo src={logo} alt="logo" />
      </S.NavLink>
      <S.Container>
        <S.NavLink onClick={() => handleNavigate('#about')}>Inicio</S.NavLink>
        <S.NavLink onClick={() => handleNavigate('#projects')}>
          Projetos
        </S.NavLink>
        <Button type="button" onClick={() => setIsModalOpen(true)}>
          <S.EmailIcon />
          Contato
        </Button>

        {isModalOpen && <ContactModal setIsModalOpen={setIsModalOpen} />}

        <S.PlayerWrapper>
          <p>Bruno Zolini</p>
          <img
            src="https://cdn.discordapp.com/attachments/1071041803010191362/1071046525725179914/b0f82515-3537-482a-851f-33819fd10a95.png"
            alt="A guy on the computer"
            width="50px"
            style={{ borderRadius: 5 }}
          />
        </S.PlayerWrapper>

        <div>
          {darkThemeOn ? (
            <S.ChangeMode onClick={() => setSelectedTheme('light')}>
              <S.DarkThemeIcon size="20" />
              Tema Escuro
            </S.ChangeMode>
          ) : (
            <S.ChangeMode onClick={() => setSelectedTheme('dark')}>
              <S.LightThemeIcon size="20" />
              Tema Claro
            </S.ChangeMode>
          )}
          <S.ChangeLanguage htmlFor="language">
            <S.LanguageIcon size="19" />
            <S.Select id="language">
              <S.Option value="pt-br">Português(BR)</S.Option>
              <S.Option value="en">English(US)</S.Option>
            </S.Select>
          </S.ChangeLanguage>
        </div>
      </S.Container>
    </S.Header>
  );
}
