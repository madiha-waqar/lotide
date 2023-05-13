const countLetters = function (sentence) {
  const counter = {};

  for (let letters of sentence) {
    if (letters === ' ') {
      continue;
    }
    if (counter[letters]) {
      counter[letters] += 1;
    } else {
      counter[letters] = 1;
    }
  }
  console.log(counter);
  return counter;
};
module.exports = countLetters;

const result1 = countLetters('lighthouse in the house');
  //{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,}
