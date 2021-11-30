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

const countLetters = function(str) {
  const results = {};

  for (let letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};


// const sourceStr = "lighthouse in the house";
// const strToCountLetters = sourceStr.split(" ").join("");

// const counted = countLetters(strToCountLetters);
// console.log(counted);

//Test code

module.exports = countLetters;