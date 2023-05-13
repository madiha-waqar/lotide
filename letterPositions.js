const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let currrentLetter = sentence[i];

    if (currrentLetter === ' ') {
      continue;
    }
    if (results[currrentLetter]) {
      results[currrentLetter].push(i)
    } else {
      results[currrentLetter] = [i]
    }
  }
  return results;
};

module.exports = letterPositions;
assertArraysEqual(letterPositions("hello").l, [2, 3]);