import {solution} from './solution';
import 'mocha';
import {assert} from "chai";

const test = (num: number, expected: number) => {
  assert.strictEqual(solution(num), expected);
}

describe("# Multiples of 3 or 5", () => {
  context("Postive number", () => {
    it("3[] => 0", () => {
      test(3, 0);
    });

    it("8[3, 5, 6] => 14", () => {
      test(8, 14);
    });

    it("10[3, 5, 6, 9] => 23", () => {
      test(10, 23);
    });
  });

  context("Boundary condition", () => {
    it("1[] => 0", () => {
      test(1, 0);
    });

    it("0[] => 0", () => {
      test(0, 0);
    });

    it("-1 => 0", () => {
      test(-1, 0);
    });
  });

  context("Negative number(if the number is negative, return 0)", () => {
    it("-10 => 0", () => {
      test(-10, 0);
    });

    it("Number.MIN_SAFE_INTEGER => 0", () => {
      test(Number.MIN_SAFE_INTEGER, 0);
    });
  });
});
