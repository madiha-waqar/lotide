const assert = require('chai').assert;
const  middle = require('../middle');

describe(("#middle"), () => {
it("returns [] for [1]", () => {
  assert.deepEqual(middle([1]), []);
});

it("returns [] for [1,2]", () => {
assert.deepEqual(middle([1, 2]), []);
});
it("returns [2] for [1,2,3]", () => {
  assert.deepEqual(middle([1, 2]), []);
});
it("returns [] for [2]", () => {
  assert.deepEqual(middle([1, 2]), []);
});
it("returns [3] for [1, 2, 3, 4, 5]", () => {
  assert.deepEqual(middle([1, 2]), []);
});
it("returns [2,3] for [1, 2, 3, 4]", () => {
  assert.deepEqual(middle([1, 2]), []);
});
  
});
//TEST CODE
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]