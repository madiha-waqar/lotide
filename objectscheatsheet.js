const myObj = { a: "1", b: "2" };
console.log(Object.keys(myObj));

for (let key of [ 'a', 'b' ]) {
    console.log("Key of ['a', 'b']: ", key)
    }
// object myObj is not iternable but its keys Object.keys(myObj) are.
console.log("* * * * * * * * * * * * * *")
const ab = { c: '1', d: ["2", 3] };
console.log("Printing object ab: ",ab);
console.log("Accessing keys of the object ab: Object.keys(ab):", Object.keys(ab));
console.log("Accessing value of object ab's key c: ab['c']): ", ab['c']);
console.log("Accessing value of object ab's key c: ab.c): ", ab.c);
console.log("Accessing value of object ab's key d: ab['d']): ", ab['d']);
console.log("Accessing value of object ab's key d: ab.d): ", ab.d);

console.log(Object.keys(ab));
console.log("Object.keys(ab).length :", Object.keys(ab).length);

console.log(Object.values(ab));
console.log("Object.values(ab).length :",Object.values(ab).length);

//console.log(Object.values(ab)['c']); -> Gen error.
console.log((ab).c);
console.log(typeof((ab).c));
console.log(Array.isArray((ab).c));

console.log((ab).d);
console.log(typeof((ab).d));
console.log(Array.isArray((ab).d));