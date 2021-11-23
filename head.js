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

const head = function (arg) {
  return arg[0];
}

// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,7]), 5);

