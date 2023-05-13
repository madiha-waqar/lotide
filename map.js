const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["london", "bridge", "is", "falling", "down"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let results = map(words, word => word[0]);
console.log(results);

module.exports = map;

//const arrayNums = [1, 4, 9, 16];
//const results = arrayNums.map(arrayNum => arrayNum * 2);
//console.log(assertArraysEqual(results,[ 2, 8, 18, 32]));

//const arrayNums = [1, 4, 9, 16];
//const results = arrayNums.map(Math.sqrt);
//console.log(assertArraysEqual(results,[ 2, 8, 18, 32]));

//const arrayNums = [1, 4, 9, 16];
//const results = arrayNums.map(arrayNum => arrayNum + 'A');
//console.log(assertArraysEqual(results,['1A', '4A', '9A', '16A'])); 