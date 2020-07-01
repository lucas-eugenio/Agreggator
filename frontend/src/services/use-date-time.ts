import { saveOnLocalStorage, getFromLocaStorage } from './use-local-storage';
import { useState } from 'react';

const START_AT_KEY = 'START_AT';
const END_AT_KEY = 'END_AT';

const useDateTime = () => {
  const [startAt, setStartAt] = useState<string>(getFromLocaStorage(START_AT_KEY));
  const [endAt, setEndAt] = useState<string>(getFromLocaStorage(END_AT_KEY));

  const defineStartAt = (dateTime: string): void => {
    setStartAt(dateTime);
    saveOnLocalStorage(dateTime, START_AT_KEY);
  }

  const defineEndAt = (dateTime: string): void => {
    setEndAt(dateTime);
    saveOnLocalStorage(dateTime, END_AT_KEY);
  }

  const resetStartAt = (): void => {
    defineStartAt('');
  }

  const resetEndAt = (): void => {
    defineEndAt('');
  }

  return { startAt, endAt, defineStartAt, defineEndAt, resetStartAt, resetEndAt }
}

export default useDateTime;