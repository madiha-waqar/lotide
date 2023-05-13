const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1}  !== ${array2}`);
  }
};

//TEST CODE
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Pass
// assertArraysEqual(["1", "2", "3"], ["1", "2", "4"]); // Fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // Fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fail


module.exports = assertArraysEqual