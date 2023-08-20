import {findOdd} from './solution';
import 'mocha';
import {assert} from "chai";

const test = (numbers: number[], expected: number) => {
  assert.strictEqual(findOdd(numbers), expected);
}

describe("# Find the odd int", () => {
  context("Postive test cases", () => {
    it("[10] => 10", () => {
      test([10], 10);
    });

    it("[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1] => 10", () => {
      test([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    });

    it("[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5] => 5", () => {
      test([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    });
  });
});
