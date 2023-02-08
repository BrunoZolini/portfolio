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

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Modal onClick={handleClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Close onClick={handleClose}>
          <MdClose size="28" />
        </S.Close>
        <h1>Quer me conhecer ou entrar em contato?</h1>
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
          Oportunidade de Trabalho: [Titulo da Vaga] na [Nome da empresa]"
          target="_blank"
          rel="noreferrer"
        >
          bruno.zolini@hotmail.com
        </S.Link>
      </S.Container>
    </S.Modal>
  );
}
