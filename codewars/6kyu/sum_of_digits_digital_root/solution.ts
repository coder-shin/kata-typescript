// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript
export const digitalRoot = (n: number): number => {
  return findDigitalRoot(n);
}

const findDigitalRoot = (n: number): number => {
  if (isOneDigit(n)) {
    return sumNumArray(splitDigit(n));
  } else {
    return findDigitalRoot(sumNumArray(splitDigit(n)));
  }
}

const splitDigit = (n: number): number[] => {
  const numberString = `${n}`;
  return numberString.split('').map(ns => parseInt(ns));
}

const sumNumArray = (numArr: number[]): number => {
  return numArr.reduce((acc, cur) => acc + cur, 0);
}

const isOneDigit = (n: number): boolean => {
  return 0 < n && n < 10;
}

// other person answer
// const digitalRoot = (n: number): number => {
//   return (n - 1) % 9 + 1;
// }
