# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by MWaqar as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mail2madihawaqar/lotide`

**Require it:**

`const _ = require('@mail2madihawaqar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
`assertArraysEqual(array1, array2)`: prints result of eqArrays function based on whether return value is true or false
`assertEqual(actual, expected)`: prints whether 2 values are equal or not
`assertObjectsEqual(object1, object2)`: prints result of eqObjects function based on whether return value is true or false
`countLetters(string)`: count and return the number of characters (excluding spaces) in a string
`countOnly(allItems, itemsToCount)`: counts all instances of value(s) in an array
`eqArrays(array1, array2)`: return true or false that 2 arrays are equal
`eqObjects(object1, object2)`: return true or false that 2 objects are equal
`findKey(object, callback)`: returns the first key that matches input
`findKeyByValue(object, value)`: returns key of a given value
`flatten(array)`: uses recursion to loop through and bring values from any nested array into main array
`head(array)`: returns first element of array
`letterPositions(string)`: returns indices where a given letter used when calling the function occurs (eg. letterPositions("hello").l = [2, 3])
`map(array, callback)`: creates new array with callback function applied to initial values
`middle(array)`: returns middle element(s) of a given array - 1 for odd number of elements, 2 for even
`tail(array)`: returns all but the first element of a given array
`takeUntil(array, callback)`: returns an array made of all elements before the given condition occurs
`without(source, itemsToRemove)`: returns a modified array excluding the given values