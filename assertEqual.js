const assertEqual = function(actual, expected) {
  actual === expected ? console.log("✅✅✅" + "Assertion Passed: " + actual + " === " + expected) : console.log("🛑🛑🛑" + "Assertion Failed: " + actual + " !=== " + expected);
};

// TEST CODE
assertEqual(1, 1);
assertEqual('1', 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
