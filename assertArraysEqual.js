//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Function implementation
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

assertArraysEqual([1, 2, 2, 4], [1, 2, 2, 4]);
assertArraysEqual([1, 2, 2, 4], [1, 2, 2, "4"]);
assertArraysEqual([1, 2, 2, 4], [1, 2, 2]);
