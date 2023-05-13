const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function (array) {
  let flattenedArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flattenedArray.push(item);
      }
    }
    else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4], [], 5, 6]));