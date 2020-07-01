import React from 'react';
import Card from '../core/card/card.component';
import CardTitle from '../core/typography/card-title.component';
import {
  TextInput,
  TimeInput,
  SubmitButton,
  SectionContainer,
  InputBox,
  InputForm,
  TimeForm,
} from './form-card.style';

const SITE_INPUT_ID = 'SITE_INPUT_ID';
const KEYWORD_INPUT_ID = 'KEYWORD_INPUT_ID';
const START_AT_INPUT_ID = 'START_AT_INPUT_ID';
const END_AT_INPUT_ID = 'END_AT_INPUT_ID';


interface IFormCard {
  addSiteOnList: (site: string) => void;
  addKeyWordOnList: (keyWord: string) => void;
  defineStartAt: (dateTime: string) => void;
  defineEndAt: (dateTime: string) => void;
}

const FormCard: React.FC<IFormCard> = ({
  addSiteOnList,
  addKeyWordOnList,
  defineStartAt,
  defineEndAt,
}) => {

  const handleChange = (id: string, onChange: (value: string) => void) => {
    const value = (document.getElementById(id) as HTMLInputElement).value;
    value && onChange(value);
  }

  const handleSiteAdd = () => {
    handleChange(SITE_INPUT_ID, addSiteOnList);
  }

  const handleKeyWordAdd = () => {
    handleChange(KEYWORD_INPUT_ID, addKeyWordOnList);
  }

  const handleStartAtSet = () => {
    handleChange(START_AT_INPUT_ID, defineStartAt);
  }

  const handleEndAtSet = () => {
    handleChange(END_AT_INPUT_ID, defineEndAt);
  }

  const TextInputComponent = (id: string, p: string, onClick: () => void) => (
    <InputBox>
      <TextInput id={id} type="text" placeholder={p} />
      <SubmitButton onClick={onClick}>
        Adicionar
      </SubmitButton>
    </InputBox>
  );

  const TimeInputComponent = (id: string, onClick: () => void) => (
    <InputBox>
      <TimeInput id={id} type="datetime-local" />
      <SubmitButton onClick={onClick}>
        Definir
      </SubmitButton>
    </InputBox>
  );


  return (
    <Card>
      <InputForm>
        <CardTitle>
          Adicione um Site que Deseja Acompanhar:
        </CardTitle>
        {TextInputComponent(
          SITE_INPUT_ID,
          "Ex: https://www.wired.com/category/science/feed",
          handleSiteAdd,
        )}
      </InputForm>
      <SectionContainer>
        <InputForm>
          <CardTitle>
            Frase Chave para Filtrar as Notícias:
          </CardTitle>
          {TextInputComponent(KEYWORD_INPUT_ID, "Ex: Casos de Coronavirus", handleKeyWordAdd)}
        </InputForm>
      </SectionContainer>
      <SectionContainer>
        <TimeForm>
          <CardTitle>
            Horário Inicial:
          </CardTitle>
          {TimeInputComponent(START_AT_INPUT_ID, handleStartAtSet)}
        </TimeForm>
        <TimeForm>
          <CardTitle>
            Horário Final:
          </CardTitle>
          {TimeInputComponent(END_AT_INPUT_ID, handleEndAtSet)}
        </TimeForm>
      </SectionContainer>
    </Card>
  );
} 

export default FormCard;