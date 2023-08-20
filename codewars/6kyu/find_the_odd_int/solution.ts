// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript
export const findOdd = (numbers: number[]): number => {
  let memo: MemoInterface = {};

  numbers.forEach((num: number) => {
    memo = doMemo(memo, num);
 });

  return findKeyWithOddValue(memo);
}

const doMemo = (memo: MemoInterface, num: number): MemoInterface => {
  const shallowCopy: MemoInterface = {...memo};
  const numString: string = `${num}`;

  if(shallowCopy[numString] === undefined) {
    shallowCopy[numString] = 1;
    return shallowCopy;
  } else {
    shallowCopy[numString] = shallowCopy[numString] + 1;
    return shallowCopy;
  }
}

const findKeyWithOddValue = (memo: MemoInterface): number => {
  return Number(Object.keys(memo).find((key) => memo[key] % 2 !== 0));
}

interface MemoInterface {
  [key: string]: number;
}

