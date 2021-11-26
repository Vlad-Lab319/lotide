//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Test / assertion functions
const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2);
  if (eqArrays(arr1, arr2)) {
    console.log(pass, pass, pass, `Arrays are equal`);
  } else {
    console.log(fale, fale, fale, `Arrays are different`);
  }
};

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

// Function implementation

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 5, 7, 9];

const map = function(array, callback) {
  //temporary code:
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// let lengthCheck = function (word) {
//   if (word.length < 6) {
//     console.log(word);
//     return word;
//   }
// }

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[0].toUpperCase());
// const results3 = map(words, word => word.length);
// const results4 = map(words, word => word.length < 6 ? word : undefined);
// const results5 = map(numbers, number => number * number);

//const results2 = map(words, word => lengthCheck(word));


// console.log(results1);
// console.log(results2);
// console.log(results3);
// console.log(results4);
// console.log(results5);

//Test code

assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[0].toUpperCase()), ['G','C','T','M','T']);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => word.length < 6 ? word : undefined), [undefined, undefined, 'to', 'major', 'tom']);
assertArraysEqual(map(numbers, number => number * number), [1, 4, 25, 49, 81]);
