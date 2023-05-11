const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "4"]); // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fail