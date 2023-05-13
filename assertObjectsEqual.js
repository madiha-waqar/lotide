const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
 if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: Objects Equal: ${inspect(object1)} === ${inspect(object2)}`); 
      } else {
    console.log(`🛑🛑🛑 Assertion Failed: Objects Not Equal: ${inspect(object1)}  !== ${inspect(object2)}`); 
  }
};

module.exports = assertObjectsEqual;

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c:"1" };
assertObjectsEqual(cd, dc);

const ab = { a: '1', b: "2" };
const ba = { b: "2", a: '1' };
assertObjectsEqual(ab, ba);

const xy = { x: ["1", "2"], y: ["2", "3"] };
const yx = { y: ["2", "3"], x: ["1", "2"] };
assertObjectsEqual(xy, yx);

const ab1 = { a: "1", b: "2" };
const ba1 = { b: "3", a: "1" };
assertObjectsEqual(ab1, ba1);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);