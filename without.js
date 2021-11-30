// //Emojis
// const pass = String.fromCodePoint(0x1F600);
// const fale = String.fromCodePoint(0x1F47A);

// // Functions implementation
// const assertArraysEqual = function(arr1, arr2) {
//   eqArrays(arr1, arr2);
//   if (eqArrays(arr1, arr2)) {
//     console.log(pass, pass, pass, `Arrays are equal`);
//   } else {
//     console.log(fale, fale, fale, `Arrays are different`);
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     //console.log('Unequal length', false);
//     return false;
//   } else {
//     let similarElements = true;
//     for (let i = 0; i < arr2.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         //console.log(arr1[i], arr2[i]);
//         //console.log(`${i} different elements index`);
          
//       } else {
//         similarElements = false;
//         //console.log('scope', similarElements);
//         return similarElements;

//       }
//     }
//     if (similarElements) {
//       //console.log('Equal arrays', similarElements);
//     }
//     return similarElements;
//   }
  
// };

const without = function(source, itemsToRemove) {

  let clearArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      clearArray.push(source[i]);
    }
  }
  console.log(clearArray);
  return clearArray;
};

module.exports = without;

// //Test code
// without([1,2,3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);
// without(["1", "2", "3", 'snacks', 'soda'], [1, 2, "3", 'soda']);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
