const assert = require('assert');
const { Dictionary } = require('../src/dictionary.js');

describe('Dictionary', () => {
  it('Should validate the instance of Dictionary', () => {
    const entries = [{ word: 'a', meaning: 'alphabet' }];
    const dict1 = new Dictionary(entries);
    const dict2 = new Dictionary(entries);
    const otherDict = { entries: [{ word: 'a', meaning: 'alphabet' }] };

    assert.ok(dict1.equals(dict2));
    assert.equal(dict1.equals(otherDict), false);
  });

  it('Should validate state of instance', () => {
    const entries1 = [{ word: 'a', meaning: 'alphabet' }];
    const entries2 = [{ word: 'b', meaning: 'alphabet' }];
    const dict1 = new Dictionary(entries1);
    const dict2 = new Dictionary(entries2);

    assert.equal(dict1.equals(dict2), false);
  });
});

describe('search', () => {
  it('Should give meaning of the given word', () => {
    const entries = [{ word: 'a', meaning: 'alphabet' }];
    const dict = new Dictionary(entries);
    const actual = dict.search('a');
    const expected = { word: 'a', meaning: 'alphabet' };

    assert.deepStrictEqual(actual, expected);
  });

  it('Should give undefined when word not found', () => {
    const entries = [{ word: 'a', meaning: 'alphabet' }];
    const dict = new Dictionary(entries);
    const actual = dict.search('b');

    assert.deepStrictEqual(actual, undefined);
  });
});

describe('startsWith', () => {
  it('Should give all the entries startsWith specific character', () => {
    const entries = [
      { word: 'a', meaning: 'alphabet' },
      { word: 'am', meaning: 'alphabet' }];
    const dict = new Dictionary(entries);
    const actual = dict.startsWith('a');

    assert.deepStrictEqual(actual, entries);
  });

  it('When match not found', () => {
    const entries = [{ word: 'a', meaning: 'alphabet' }];
    const dict = new Dictionary(entries);
    const actual = dict.startsWith('b');

    assert.deepStrictEqual(actual, []);
  });
});
