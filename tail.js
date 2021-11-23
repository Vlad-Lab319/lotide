//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Function implementation

//To String version
// const assertEqual = function(actual, expected) {
//   if (actual.toString() === expected.toString()) {
//     console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//Elements comparing
const assertEqual = function(actual, expected) {
  let assertion = false;
  if (actual === expected) {
    console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
  } else if (actual.length !== expected.length) {
    console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
        break;
      } else {
        assertion = true;
      }
    }
  }
  if (assertion === true) {
    console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arg) {
  if (arg.length === 0) {
    return arg;
  }
  let tailArr = arg.slice(1);
  //console.log(tailArr);
  return tailArr;
};

// Test code
assertEqual(tail([5,6,7,8]), [6,7,8]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([]), "Hello");
assertEqual(tail(["Lighthouse"]), "Hello");
assertEqual(tail([]),[]);
assertEqual(tail([5,6,7]), [9,7]);


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(words);
