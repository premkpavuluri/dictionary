const assert = require('assert');

class Dictionary {
  constructor(entries) {
    this.entries = entries;
  }

  search(keyWord) {
    return this.entries.find(entry => entry.word === keyWord);
  }

  startsWith(character) {
    return this.entries.filter(entry => entry.word.startsWith(character));
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
