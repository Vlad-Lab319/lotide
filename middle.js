//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Test/Assertion functions
const assertArraysEqual = function(arr1, arr2) {
  //eqArrays(arr1, arr2);
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

//Actual function

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    return [];
  } else {
    let middleIndex = Math.floor(array.length / 2);
    // console.log(middleIndex);
    if (array.length % 2 === 0) {
      // console.log('even');
      middleArray.push(array[middleIndex - 1]);
      middleArray.push(array[middleIndex]);

    } else {
      // console.log('odd');
      middleArray.push(array[middleIndex]);
    }
  }
  return middleArray;
};

//Test code

//console.log(middle([1, 2, 4, 5, 5]));
//console.log(middle([1, 2, 4, 5]));

assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]); //true
assertArraysEqual(middle([1,2,3,4,5,6,7,99]),[4]); //false
assertArraysEqual(middle([1,2,3,4,5,6,7,99]),[4,5]); //true
assertArraysEqual(middle([6,7]),[]); //true
//assertArraysEqual(eqArrays(['apple','banana','peach'],['banana']), true);
assertArraysEqual(middle([7, 8]),[7]); //should be faulse


const test = ["hello", "world", "lighthouse"];
middle(test); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(test, ["hello", "world", "lighthouse"]);