const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]); //true
assertArraysEqual(middle([1,2,3,4,5,6,7,99]),[4]); //false
assertArraysEqual(middle([1,2,3,4,5,6,7,99]),[4,5]); //true
assertArraysEqual(middle([6,7]),[]); //true
assertArraysEqual(middle([7, 8]),[7]); //should be false


// const test = ["hello", "world", "lighthouse"];
// middle(test); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(test, ["hello", "world", "lighthouse"]);