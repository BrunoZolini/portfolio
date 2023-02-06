import { useState } from 'react';
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
      <a href="_">LOGO</a>
      <S.LeftContainer>
        <S.NavLink href="">Inicio</S.NavLink>
        <S.NavLink onClick={() => handleNavigate('#about')}>Sobre</S.NavLink>
        <S.NavLink href="">Habilidades</S.NavLink>
        <S.NavLink onClick={() => handleNavigate('#projects')}>
          Projetos
        </S.NavLink>
      </S.LeftContainer>
      <S.RightContainer>
        <Button type="button" onClick={() => setIsModalOpen(true)}>
          <S.EmailIcon />
          Contato
        </Button>

        {isModalOpen && <ContactModal setIsModalOpen={setIsModalOpen} />}

        <p>Bruno Zolini</p>
        <img
          src="https://cdn.discordapp.com/attachments/1071041803010191362/1071046525725179914/b0f82515-3537-482a-851f-33819fd10a95.png"
          alt="A guy on the computer"
          width="50px"
          style={{ borderRadius: 5 }}
        />

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
              <option value="valor1">Mudar Idioma</option>
              <option value="en">English(US)</option>
              <option value="pt-br">Português(BR)</option>
            </S.Select>
          </S.ChangeLanguage>
        </div>
      </S.RightContainer>
    </S.Header>
  );
}
