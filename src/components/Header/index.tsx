import { useSelectedTheme } from '../../contexts';
import Button from '../Button';
import * as S from './styles';

export default function Header() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
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
        <S.NavLink href="">Home</S.NavLink>
        <S.NavLink onClick={() => handleNavigate('#about')}>About</S.NavLink>
        <S.NavLink href="">Skills</S.NavLink>
        <S.NavLink onClick={() => handleNavigate('#projects')}>
          Projects
        </S.NavLink>
      </S.LeftContainer>
      <S.RightContainer>
        <Button type="button">
          <S.EmailIcon />
          Contact
        </Button>

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
              Dark Mode
            </S.ChangeMode>
          ) : (
            <S.ChangeMode onClick={() => setSelectedTheme('dark')}>
              <S.LightThemeIcon size="20" />
              Light Mode
            </S.ChangeMode>
          )}
          <S.ChangeLanguage htmlFor="language">
            <S.LanguageIcon size="19" />
            <S.Select id="language">
              <option value="valor1">Select Language</option>
              <option value="en">English(US)</option>
              <option value="pt-br">Português(BR)</option>
            </S.Select>
          </S.ChangeLanguage>
        </div>
      </S.RightContainer>
    </S.Header>
  );
}
