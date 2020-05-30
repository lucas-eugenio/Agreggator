export const saveOnLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
}

export const getFromLocaStorage = (key: string): string => {
  return localStorage.getItem(key) || '';
}