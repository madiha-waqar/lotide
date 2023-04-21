const assertEqual = function(actual, expected) {
  actual === expected ? console.log("✅✅✅" + "Assertion Passed: " + `${actual}` + " === " + `${expected}`) : console.log("🛑🛑🛑" + "Assertion Failed: " + `${actual}` + " !=== " + `${expected}`);
};

const head = function(array) {
  return array[0];
};

//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 6);
assertEqual(head([""],""));
assertEqual(head(["'5'"],"5"));