import { stringToArr, arrToString } from "../utils/json-parser";

export const saveOnLocalStorage = (value: string, key: string): void => {
  localStorage.setItem(key, value);
}

export const saveArrOnLocalStorage = (list: string[], key: string): void => {
  const value = arrToString(list);
  localStorage.setItem(key, value);
}

export const getFromLocaStorage = (key: string): string => {
  return localStorage.getItem(key) || '';
}

export const getArrFromLocaStorage = (key: string): string[] => {
  const value = localStorage.getItem(key) || '';
  return value ? stringToArr(value) : [];
}