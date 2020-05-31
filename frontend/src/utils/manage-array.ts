export const addToUniqueArray = (value: string, array: string[]): string[] => {
  const notUnique = array.find(item => item === value);
  !notUnique && array.push(value);
  return array;
}

// export const removeFromArray = (value: string, array: string[]): string[] => {

// }