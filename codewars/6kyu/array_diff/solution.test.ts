import {arrayDiff} from './solution';
import 'mocha';
import {assert} from "chai";

const test = (a: number[], b: number[], expected: number[]) => {
  assert.deepEqual(arrayDiff(a, b), expected);
}

describe('# Array.diff', () => {
  context('Normal case tests', () => {
    it('[], [4, 5] -->  []', () => {
      test([], [4, 5], []);
    });

    it('[3, 4], [3] -->  [4]', () => {
      test([3, 4], [3], [4]);
    });

    it('[3, 4], [5] -->  [3, 4]', () => {
      test([3, 4], [5], [3, 4]);
    });

    it('[4, 5], [] -->  [4, 5]', () => {
      test([4, 5], [], [4, 5]);
    });
  });

  context('Special case tests', () => {
    it('[1, 1, 3], [1] -->  [3]', () => {
      test([1, 1, 3], [1], [3]);
    });

    it('[1, 2, 3, 2, 1], [2] -->  [1, 3, 1]', () => {
      test([1, 2, 3, 2, 1], [2], [1, 3, 1]);
    });
  });
});
