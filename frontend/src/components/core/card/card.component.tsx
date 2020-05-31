import React from 'react';
import { BaseContainer, BaseCard } from './card.styled';

interface ICard {
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({children}) => {
  return (
    <BaseContainer>
      <BaseCard>
        {children}
      </BaseCard>
    </BaseContainer>
  )
}

export default Card;