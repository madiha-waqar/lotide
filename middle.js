const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  let arrayLength = array.length;
  let mid = arrayLength / 2;

  if (arrayLength <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return [array[Math.floor(mid)]]
  }
  else {
    return [array[mid - 1], array[mid]]
  }
  return;
}
module.exports = middle


//TEST CODE
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
