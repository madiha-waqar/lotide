const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')


//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, '2', 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays([1, '',  3], [1, 2, 3]), true);
assertEqual(eqArrays(['a'], ['a']), true);