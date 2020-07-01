import { saveArrOnLocalStorage, getArrFromLocaStorage } from './use-local-storage';
import { useState } from 'react';
import { addToUniqueArray, removeFromArray } from '../utils/manage-array';

const KEYWORD_LIST_KEY = 'KEYWORD_LIST';

const useKeyWordList = () => {
  const [keyWordList, setKeyWordList] = useState<string[]>(getArrFromLocaStorage(KEYWORD_LIST_KEY));

  const addKeyWordOnList = (value: string): void => {
    const newKeyWordList = addToUniqueArray(value, keyWordList);
    setKeyWordList(newKeyWordList);
    saveArrOnLocalStorage(newKeyWordList, KEYWORD_LIST_KEY);
  }

  const removeKeyWordFromList = (value: string) => {
    const newKeyWordList = removeFromArray(value, keyWordList)
    setKeyWordList(newKeyWordList);
    saveArrOnLocalStorage(newKeyWordList, KEYWORD_LIST_KEY);
  }

  return { keyWordList, addKeyWordOnList, removeKeyWordFromList }
}

export default useKeyWordList;