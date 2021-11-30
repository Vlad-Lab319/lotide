// //Emojis
// const pass = String.fromCodePoint(0x1F600);
// const fale = String.fromCodePoint(0x1F47A);

// // Test/Assertion functions
// const assertArraysEqual = function(arr1, arr2) {
//   //eqArrays(arr1, arr2);
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

//Function implementation

const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;

  for (let letter of sentence) {
    if (results[letter]) {
      results[letter].push(counter);
    } else {
      if (letter !== ' ') {
        results[letter] = [counter];
      }
    }
    counter += 1;
  }

  return results;
};

module.exports = letterPositions;

// const sourceStr = "lighthouse in the house";

// const counted = letterPositions(sourceStr);
// console.log(counted);


// //Test code

// const testSentence = 'hello';
// let result = letterPositions(testSentence);
// console.log(result);
// assertArraysEqual(result['h'], [0]); //true
// assertArraysEqual(result['l'], [7, 12]); //false
// assertArraysEqual(result['l'], [2, 3]); //true
