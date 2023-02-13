import { useState } from 'react';
import About from '../About';
import Skills from '../Skills';
import * as S from './styles';

export function Carousel() {
  const [index, setIndex] = useState(0);
  const items = [<About />, <Skills />];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1 < items.length ? prev + 1 : 0));
  };
  return (
    <S.Container>
      <S.Button direction="left" onClick={handlePrev}>
        <S.Prev />
      </S.Button>
      <S.Content>{items[index]}</S.Content>
      <S.Button direction="right" onClick={handleNext}>
        <S.Next />
      </S.Button>
    </S.Container>
  );
}
