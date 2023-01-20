import { MdDarkMode, MdLanguage, MdOutlineLightMode } from 'react-icons/md';
import Button from '../Button';
import * as S from './styles';

export default function Header() {
  const darkThemeOn = true;

  return (
    <S.Header>
      <S.LeftContainer>
        <a href="_">LOGO</a>
        <S.NavLink href="_">Home</S.NavLink>
        <S.NavLink href="_">About</S.NavLink>
        <S.NavLink href="_">Projects</S.NavLink>
        <S.NavLink href="_">Skills</S.NavLink>
      </S.LeftContainer>
      <S.RightContainer>
        <Button type="button">Contact</Button>

        <p>Bruno Zolini</p>
        <img
          src="https://media.discordapp.net/attachments/163018412262424576/986330803661340682/b0f82515-3537-482a-851f-33819fd10a95.jpeg"
          alt="A guy on the computer"
          width="50px"
          style={{ borderRadius: 5 }}
        />

        <div>
          {darkThemeOn ? (
            <S.ChangeMode>
              <MdDarkMode size="20" />
              Dark Mode
            </S.ChangeMode>
          ) : (
            <S.ChangeMode>
              <MdOutlineLightMode size="20" />
              Light Mode
            </S.ChangeMode>
          )}
          <S.ChangeLanguage htmlFor="language">
            <MdLanguage size="19" />
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
