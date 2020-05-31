import React from 'react';
import { Title } from './card-title.styled';

interface ICardTitle {
  children: string
}

const CardTitle: React.FC<ICardTitle> = ({ children }) => {
  return (
    <Title>
      {children}
    </Title>
  );
};

export default CardTitle;