//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

//Old code just in case for backup

// Function implementation
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// //To String version
// // const assertEqual = function(actual, expected) {
// //   if (actual.toString() === expected.toString()) {
// //     console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
// //   } else {
// //     console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
// //   }
// // };

//Elements comparing
const assertEqual = function(actual, expected) {
  let assertion = false;
  if (actual === undefined) {
    assertion = false;
    console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  if (actual === expected) {
    console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
    // return;
  } else if (actual.length !== expected.length) {
    console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
        break;
      } else {
        assertion = true;
      }
    }
  }
  if (assertion === true) {
    console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
  }
};

console.log(assertEqual(1, 2));

module.exports = assertEqual;