import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export default function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <S.Button {...props}>{children}</S.Button>;
}
