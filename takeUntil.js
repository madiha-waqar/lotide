const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function (array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item)) { // when callback condition becomes truthy
      return results //returns the results array
    }
    else {
      results.push(item) // else return the results array with items returning falsey on callback condition check
      // if the falsey value is not found then whole array will be returned
    }
  }
  return results;
};
module.exports = takeUntil;

//The function will return a "slice of the array with elements taken from the beginning." 
//It should keep going until the callback/predicate returns a truthy value.

const data1 = [1, 2, -5, 2, 10];
const results = takeUntil(data1, x => x < 0);
assertArraysEqual(results,[1,2]);
