import React from 'react';
import Card from '../core/card/card.component';
import CardTitle from '../core/typography/card-title.component';
import { TextInput, SubmitButton } from './form-card.style';

const TEXT_INPUT_ID = 'TEXT_INPUT_ID';

interface IFormCard {
  addSiteOnList: (site: string) => void;
}

const FormCard: React.FC<IFormCard> = ({ addSiteOnList }) => {
  const handleClick = () => {
    const value = (document.getElementById(TEXT_INPUT_ID) as HTMLInputElement).value;
    value && addSiteOnList(value);
  }

  return (
    <Card>
      <form>
        <CardTitle>
          Adicione um Site que Deseja Acompanhar:
        </CardTitle>
        <TextInput
          id={TEXT_INPUT_ID}
          type="text"
          name="name"
          placeholder="Ex: https://www.wired.com/category/science/feed"
        />
        <SubmitButton onClick={handleClick}>
          Adicionar
        </SubmitButton>
      </form>
    </Card>
  )
} 

export default FormCard;