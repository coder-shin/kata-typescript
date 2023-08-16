// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript
export const solution = (number: number): number => {
  if(number < 0) {
    return 0;
  }

  return sumArrayElement(filterMultiplesOf3or5(number));
}

const filterMultiplesOf3or5 = (number: number): number[] => {
  return range(number).filter((n) => n % 3 === 0 || n % 5 === 0);
}

const range = (number: number): number[] => {
  return [...Array(number).keys()];
}

const sumArrayElement = (numberArray: number[]): number => {
  return numberArray.reduce((acc, cur) => acc + cur, 0);
}

