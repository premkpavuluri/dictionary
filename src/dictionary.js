const assert = require('assert');

class Dictionary {
  constructor(words) {
    this.words = words;
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
