import React from 'react';
import CardTitle from '../core/typography/card-title.component';
import { TextInput, SubmitButton } from './site-form.styled';
import useList from '../../services/use-list';
import { addToUniqueArray } from '../../utils/manage-array';

const TEXT_INPUT_ID = 'TEXT_INPUT_ID';

const SiteForm: React.FC = () => {
  const { getList, setList } = useList();

  const handleClick = () => {
    const value = (document.getElementById(TEXT_INPUT_ID) as HTMLInputElement).value;
    value && setList(addToUniqueArray(value, getList()));
  }

  return (
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
  );
};

export default SiteForm;