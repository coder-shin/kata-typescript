import {likes} from './solution';
import 'mocha';
import {assert} from "chai";

const test = (names: string[], expected: string) => {
  assert.strictEqual(likes(names), expected);
}

describe('# Who likes it?', () => {
  context('No one test case', () => {
    it('[] -->  "no one likes this"', () => {
      test([], 'no one likes this');
    });
  });

  context('One person test cases', () => {
    it('["Peter"] -->  "Peter likes this"', () => {
      test(['Peter'], 'Peter likes this');
    });

    it('["Harry"] -->  "Harry likes this"', () => {
      test(['Harry'], 'Harry likes this');
    });
  });

  context('Two people test cases', () => {
    it('["Peter", "Jacob"] -->  "Peter and Jacob like this"', () => {
      test(['Peter', 'Jacob'], 'Peter and Jacob like this');
    });

    it('["Jacob", "Peter"] -->  "Jacob and Peter like this"', () => {
      test(['Jacob', 'Peter'], 'Jacob and Peter like this');
    });
  });

  context('Three people test cases', () => {
    it('["Max", "John", "Mark"] -->  "Max, John and Mark like this"', () => {
      test(['Max', 'John', 'Mark'], 'Max, John and Mark like this');
    });
  });

  context('More than Three people test cases', () => {
    it('["Alex", "Jacob", "Mark", "Max"] -->  "Alex, Jacob and 2 others like this"', () => {
      test(['Alex', 'Jacob', 'Mark', 'Max'], 'Alex, Jacob and 2 others like this');
    });

    it('["Alex", "Jacob", "Mark", "Max", "Harry"] -->  "Alex, Jacob and 3 others like this"', () => {
      test(['Alex', 'Jacob', 'Mark', 'Max', 'Harry'], 'Alex, Jacob and 3 others like this');
    });
  });
});
