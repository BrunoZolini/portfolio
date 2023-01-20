import About from '../../components/About';
import Header from '../../components/Header';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <Header />
      <About />
    </S.Container>
  );
}