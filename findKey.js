const assertEqual = require('./assertEqual');

const findKey = function (obj, callback) {
  const objKeys = Object.keys(obj);
  for (const key in obj) {
    if (callback(obj[key])) {
      return key
    }
  }
};

module.exports = findKey;

assertEqual(findKey({
  'Fiat': { model: 100, color: "white" },
  'Lexus': { model: 250, color: "red" },
  'Toyota': { model: 500, color: "blue" },
  'Ford': { model: 1000, color: "black" },
}, car => car.model === 1000), 'Ford');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma');