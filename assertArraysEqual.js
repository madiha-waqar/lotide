const eqArrays = require('./eqArrays')

// const eqArrays = function(array1, array2) {
//     if (array1.length !== array2.length)
//       return false;
//     else {
//       for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//           return false;
//         }
//       }
//       return true;
//     }
//   };
  
  const assertArraysEqual = function(array1, array2) {
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