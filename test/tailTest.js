//const assertEqual = require('../assertEqual')
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
it("['Hello', 'Lighthouse', 'Labs'] should return tail elements ['Lighthouse', 'Labs']", () => {
  const result = ['Hello', 'Lighthouse', 'Labs'];
  assert.deepEqual(tail(result), ['Lighthouse', 'Labs']);
});


});

//Test code
//const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"