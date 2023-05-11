const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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
  
//   const assertArraysEqual = function(array1, array2) {
//     if (eqArrays(array1, array2)) {
//       console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`); 
//         } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${array1}  !== ${array2}`); 
//     }
//   };

  const middle = function (array){
    let arrayLength = array.length;
    let mid = arrayLength / 2;

    if (arrayLength <= 2){
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
