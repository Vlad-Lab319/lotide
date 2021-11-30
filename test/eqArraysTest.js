const assertEqual = require('../assertEqual');
const eqArrays = require("../eqArrays");


// assertEqual(false, true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([2], [2]), true); // => should PASS
assertEqual(eqArrays([2, 5, 1], [2, 4, 6]), true); // => shouldn't PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => shouldn't PASS

