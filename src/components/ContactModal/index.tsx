import { useEffect } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import * as S from './styles';

type ModalProps = {
  setIsModalOpen: (value: boolean) => void;
};

export default function ContactModal({ setIsModalOpen }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'outside') setIsModalOpen(false);
  };

  return (
    <S.Modal id="outside" onClick={(e) => handleOutsideClick(e)}>
      <S.Container>
        <S.Close onClick={() => setIsModalOpen(false)}>
          <MdClose size="28" />
        </S.Close>
        <S.Link
          href="https://www.linkedin.com/in/bruno-zolini/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
          LinkedIn
        </S.Link>
        <S.Link
          href="https://github.com/BrunoZolini"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
          GitHub
        </S.Link>
        <S.Link
          href="mailto:bruno.zolini@hotmail.com?subject=
          Oportunidade de Trabalho: [Titulo da Vaga] at [Nome da empresa]"
          target="_blank"
          rel="noreferrer"
        >
          bruno.zolini@hotmail.com
        </S.Link>
      </S.Container>
    </S.Modal>
  );
}
