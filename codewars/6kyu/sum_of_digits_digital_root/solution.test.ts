import {digitalRoot} from './solution';
import 'mocha';
import {assert} from "chai";

const test = (n: number, expected: number) => {
  assert.strictEqual(digitalRoot(n), expected);
}

describe('# Sum of Digits / Digital Root', () => {
  context('Just one time split cases', () => {
    it('16 --> 1 + 6 => 7', () => {
      test(16, 7);
    });

    it('18 --> 1 + 8 => 9', () => {
      test(18, 9);
    });
  });

  context('More than one time split cases', () => {
    it('942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6', () => {
      test(942, 6);
    });

    it('132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6', () => {
      test(132189, 6);
    });
  });
});
