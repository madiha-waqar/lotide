const assertEqual = require('./assertEqual')
 
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqArrays
// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, '2', 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
// assertEqual(eqArrays([1, '',  3], [1, 2, 3]), true);
// assertEqual(eqArrays(['a'], ['a']), true);
