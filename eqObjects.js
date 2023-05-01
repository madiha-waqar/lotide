const assertEqual = function (actual, expected) {
  actual === expected ? console.log("✅✅✅" + "Assertion Passed: " + `${actual}` + " === " + `${expected}`) :
    console.log("🛑🛑🛑" + "Assertion Failed: " + `${actual}` + " !=== " + `${expected}`);
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let key of array1){
      if (array1[key] !== array2[key]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function (object1, object2) {
  let keysArray_Obj1 = Object.keys(object1);
  let keysArray_Obj2 = Object.keys(object2);

  if (keysArray_Obj1.length !== keysArray_Obj2.length) {
    return false;
  }
  
  for (let key of keysArray_Obj1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key]) )
    {
      return eqArrays(object1[key], object2[key]);
    }
    else
    {
      if(object1[key] !== object2[key])
      return false;
    }
  }
  return true;
};

const ab = { a: '1', b: "2" };
const ba = { b: "2", a: '1' };
assertEqual(eqObjects(ab, ba), true);

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);


const xy = { x: ["1", "2"], y: ["2", "3"] };
const yx = { y: ["2", "3"], x: ["1", "2"] };
assertEqual(eqObjects(xy, yx), true); 

const ab1 = { a: "1", b: "2" };
const ba1 = { b: "3", a: "1" };
assertEqual(eqObjects(ab1, ba1), false);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
