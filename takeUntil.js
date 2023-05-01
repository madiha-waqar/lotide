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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`); 
      } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1}  !== ${array2}`); 
  }
};

const takeUntil = function (array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item)) { // when callback condition becomes truthy
      return results //returns the results array
    }
    else {
      results.push(item) // else return the results array with items returning falsey on callback condition check
      // if the falsey value is not found then whole array will be returned
    }
  }
  return results;
};

//The function will return a "slice of the array with elements taken from the beginning." 
//It should keep going until the callback/predicate returns a truthy value.

const data1 = [1, 2, -5, 2, 10];
const results = takeUntil(data1, x => x < 0);
assertArraysEqual(results,[1,2]);