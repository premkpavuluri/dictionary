const assert = require('assert');
const { Dictionary } = require('../src/dictionary.js');

describe('Dictionary', () => {
  it('Should validate the instance of Dictionary', () => {
    const words = [{ word: 'a', meaning: 'alphabet' }];
    const dict1 = new Dictionary(words);
    const dict2 = new Dictionary(words);
    const otherDict = { words: [{ word: 'a', meaning: 'alphabet' }] };

    assert.ok(dict1.equals(dict2));
    assert.equal(dict1.equals(otherDict), false);
  });

  it('Should validate state of instance', () => {
    const words1 = [{ word: 'a', meaning: 'alphabet' }];
    const words2 = [{ word: 'b', meaning: 'alphabet' }];
    const dict1 = new Dictionary(words1);
    const dict2 = new Dictionary(words2);

    assert.equal(dict1.equals(dict2), false);
  });
});

describe('search', () => {
  it('Should give meaning of the given word', () => {
    const words = [{ word: 'a', meaning: 'alphabet' }];
    const dict = new Dictionary(words);
    const actual = dict.search('a');
    const expected = { word: 'a', meaning: 'alphabet' };

    assert.deepStrictEqual(actual, expected);
  });

  it('Should give undefined when word not found', () => {
    const words = [{ word: 'a', meaning: 'alphabet' }];
    const dict = new Dictionary(words);
    const actual = dict.search('b');

    assert.deepStrictEqual(actual, undefined);
  });
});

describe('startsWith', () => {
  it('Should give all the words startsWith specific character', () => {
    const words = [
      { word: 'a', meaning: 'alphabet' },
      { word: 'am', meaning: 'alphabet' }];
    const dict = new Dictionary(words);
    const actual = dict.startsWith('a');

    assert.deepStrictEqual(actual, words);
  });

  it('When match not found', () => {
    const words = [{ word: 'a', meaning: 'alphabet' }];
    const dict = new Dictionary(words);
    const actual = dict.startsWith('b');

    assert.deepStrictEqual(actual, []);
  });
});
