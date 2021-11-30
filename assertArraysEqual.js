const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

const eqArrays = require('./eqArrays');

// Function implementation
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(pass, pass, pass, `Arrays are equal`);
    return true;
  } else {
    console.log(fale, fale, fale, `Arrays are different`);
    return false;
  }
};

//console.log(assertArraysEqual([1, 2, 3],[1, 2, 3]));

module.exports = assertArraysEqual;
