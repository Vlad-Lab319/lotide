const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');


assertEqual(assertArraysEqual([1, 2, 2, 4], [1, 2, 2, 4]), true);
assertEqual(assertArraysEqual([1, 2, 2, 4], [1, 2, 2, "4"]), false);
assertEqual(assertArraysEqual([1, 2, 2, 4], [1, 2, 2]), false);