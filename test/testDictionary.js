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
