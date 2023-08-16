// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript
export const spinWords = (words: string): string => {
  return words.split(' ')
              .map((word: string) => reverseStringMoreThan4Length(word))
              .join(' ');
}

const reverseStringMoreThan4Length = (word: string): string => {
  if(word.length > 4) {
    return reverseString(word);
  } else {
    return word;
  }
}

const reverseString = (word: string): string => {
  return word.split('').reverse().join('');
}

