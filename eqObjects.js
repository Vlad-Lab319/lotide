//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Test / assertion functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    //console.log('Not the same length');
    return false;
  } else {
    //console.log('Keep comparing');
    for (key of keys1) {
      if (Array.isArray(object1[key])) {
          console.log(`property is an array, object1[key] ${object1[key]}, object2[key] ${object2[key]}`);
          if(eqArrays(object1[key], object2[key]) === false) {
            return false;
          }
      }

      else if (object1[key] !== object2[key]) {
        console.log(`Values in similar keys ${key} does not much`);
        return false;
      }
    } 
  }
  //console.log('End of loops = true');
  return true;

};


//Test code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
