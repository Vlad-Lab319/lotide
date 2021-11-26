//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function implementation

let findKey = function(object, callback) {
  let keys = Object.keys(object);
  //console.log(keys);
  let result;

  for (let item of keys) {
    //console.log(item);
    //console.log(object[item]);
    //console.log('calling back!', callback(object[item]));
    if (callback(object[item])) {
      console.log(item);
      result = item;
      break;
    }
    // if (callback(object[item])) {
    //   console.log('Got it!', item);
    //   return item;
    // }

  }
  return result;

};


// Test code
let testFind = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); //console.log('this is x.stars logic ', x.stars === 2)) // => "noma"

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

assertEqual(testFind, 'noma');

// let towns = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// console.log(towns['noma'].stars);