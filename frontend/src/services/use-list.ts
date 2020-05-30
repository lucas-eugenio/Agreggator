import { arrToString, stringToArr } from '../utils/json-parser'
import { saveOnLocalStorage, getFromLocaStorage } from './use-local-storage';
import { URL_LIST_KEY } from './constants';

interface IUseListResponse {
  setList: (list: string[]) => void;
  getList: () => string[];
}

const useList = (): IUseListResponse => {
  return {
    setList,
    getList,
  }
}

const setList = (list: string[]): void => {
  const value = arrToString(list);
  saveOnLocalStorage(URL_LIST_KEY, value);
}

const getList = (): string[] => {
  const value = getFromLocaStorage(URL_LIST_KEY);
  return value ? stringToArr(value) : [];
}

export default useList;