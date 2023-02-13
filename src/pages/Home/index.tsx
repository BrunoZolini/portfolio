import { Carousel } from '../../components/Carousel';
import Header from '../../components/Header';
import { Projects } from '../../components/Projects';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <Header />
      <Carousel />
      <Projects />
    </S.Container>
  );
}
