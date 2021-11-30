// //Emojis
// const pass = String.fromCodePoint(0x1F600);
// const fale = String.fromCodePoint(0x1F47A);

// // Function implementation
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //console.log('Unequal length', false);
    return false;
  } else {
    let similarElements = true;
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] === arr2[i]) {
        //console.log(arr1[i], arr2[i]);
        //console.log(`${i} different elements index`);
          
      } else {
        similarElements = false;
        //console.log('scope', similarElements);
        return similarElements;

      }
    }
    if (similarElements) {
      //console.log('Equal arrays', similarElements);
    }
    return similarElements;
  }
  
};


// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false
// console.log(eqArrays(1, '1')); // => false


console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

module.exports = eqArrays;
