const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

const findKeyByValue = function (obj, val) {
    const objKeys = Object.keys(obj); // [ 'sci_fi', 'comedy', 'drama' ]
    for (const key of objKeys) {
        if (obj[key] === val)
            return key;
    }
};
module.exports = findKeyByValue;

assertEqual(findKeyByValue(bestTVShowsByGenre, "The     Expanse"), "sci-fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);