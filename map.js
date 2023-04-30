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

const words = ["london", "bridge", "is", "falling", "down"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let results = map(words, word => word[0]);
console.log(results);

//const arrayNums = [1, 4, 9, 16];
//const results = arrayNums.map(arrayNum => arrayNum * 2);
//console.log(assertArraysEqual(results,[ 2, 8, 18, 32])); 

//const arrayNums = [1, 4, 9, 16];
//const results = arrayNums.map(Math.sqrt);
//console.log(assertArraysEqual(results,[ 2, 8, 18, 32])); 

//const arrayNums = [1, 4, 9, 16];
//const results = arrayNums.map(arrayNum => arrayNum + 'A');
//console.log(assertArraysEqual(results,['1A', '4A', '9A', '16A'])); 