const assert = require('assert');

class Dictionary {
  constructor(words) {
    this.words = words;
  }

  search(word) {
    return this.words.find(set => set.word === word);
  }

  startsWith(character) {
    return this.words.filter(set => set.word.startsWith(character));
  }

  equals(otherWords) {
    try {
      assert.deepStrictEqual(otherWords, this);
    } catch (error) {
      return false;
    }
    return otherWords instanceof Dictionary;
  }
}

exports.Dictionary = Dictionary;
