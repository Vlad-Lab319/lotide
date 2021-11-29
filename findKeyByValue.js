//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  
  //console.log('object received: ', object);
  
  let keys = Object.keys(object);
  //console.log(keys);
  
  for (let item of keys) {
    if (object[item] === value) {
      console.log('Got it!', item);
      return item;
    }

  }

};

//Test code

const testObj = {
  key1: "this",
  key2: "that",
  key3: "other"
};

findKeyByValue(testObj, "other");



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");

