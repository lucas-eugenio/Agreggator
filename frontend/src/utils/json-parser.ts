export const arrToString = (list: string[]): string => JSON.stringify(list);

export const stringToArr = (value: string): string[] => JSON.parse(value);