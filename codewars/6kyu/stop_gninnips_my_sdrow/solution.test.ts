import {spinWords} from './solution';
import 'mocha';
import {assert} from "chai";

const test = (words: string, expected: string) => {
  assert.strictEqual(spinWords(words), expected);
}

describe("# Stop ninnipS My sdroW!", () => {
  context("Positive test cases", () => {
    it(`spinWords("Hey fellow warriors") => "Hey wollef sroirraw"`, () => {
      test("Hey fellow warriors", "Hey wollef sroirraw");
    });

    it(`spinWords("This is a test") => "This is a test"`, () => {
      test("This is a test", "This is a test");
    });
  });

  context("Boundary conditions", () => {
    it(`spinWords("Hello") => "olleH"`, () => {
      test("Hello", "olleH");
    });

    it(`spinWords("Hola") => "Hola"`, () => {
      test("Hola", "Hola");
    });

    it(`spinWords("") => ""`, () => {
      test("", "");
    });
  });
});
