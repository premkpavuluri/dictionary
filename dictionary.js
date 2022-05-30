class Words {
  constructor(words) {
    this.words = words;
  };

  beginWith(character) {
    return this.words.filter((word) => word.startsWith(character));
  };

  endWith(character) {
    return this.words.filter(word => word.endsWith(character));
  };

  // contains(character) {
  //   return this.words.filter(word => word.includes(character));
  // };

  // notContains(character) {
  //   return this.words.filter(word => !word.includes(character));
  // };

  // lengthOf(length) {
  //   return this.words.filter(word => word.length === length);
  // };

  // lessThan(length) {
  //   return this.words.filter(word => word.length < length);
  // };

  // greaterThan(length) {
  //   return this.words.filter(word => word.length > length);
  // };

  toString() {
    return this.words.join('\n');
  };
};

const words = ['a', 'b', 'am', 'hi', 'bye', 'nothing', 'something'];

const dict = new Words(words);

// console.log(dict.beginWith('a'));
// console.log(dict.endWith('a'));
