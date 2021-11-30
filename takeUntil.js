// //Emojis
// const pass = String.fromCodePoint(0x1F600);
// const fale = String.fromCodePoint(0x1F47A);

// // Test / assertion functions
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

//Function implementation

const takeUntil = function(array, callback) {
  //console.log(array);
  //console.log(callback);
  let result = [];
  for (let item of array) {
    //console.log(callback(item));
    if (!callback(item)) {
      result.push(item);
    } else break;
  }

  return result;
};

module.exports = takeUntil;


// //Test code

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);