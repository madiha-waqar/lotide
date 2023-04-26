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
  
  const letterPositions = function(sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
      let currrentLetter = sentence[i];

      if (currrentLetter === ' ') {
        continue;
      }
      if (results[currrentLetter]) {
        results[currrentLetter].push(i)
      } else {
        results[currrentLetter] = [i]
        }
    }
    return results;
  };
  
  assertArraysEqual(letterPositions("hello").l, [2, 3]);