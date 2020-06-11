import { stringToArr, arrToString } from "../utils/json-parser";

const URL_LIST_KEY = 'LIST';

export const saveOnLocalStorage = (list: string[]): void => {
  const value = arrToString(list);
  localStorage.setItem(URL_LIST_KEY, value);
}

export const getFromLocaStorage = (): string[] => {
  const value = localStorage.getItem(URL_LIST_KEY) || '';
  return value ? stringToArr(value) : [];
}