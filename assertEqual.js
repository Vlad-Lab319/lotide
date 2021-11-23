//Emojis
const pass = String.fromCodePoint(0x1F600);
const fale = String.fromCodePoint(0x1F47A);

// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(pass, pass, pass, 'Assertion Passed: ' + actual + '===' + expected);
  } else {
    console.log(fale, fale, fale, 'Assertion Failed: ' + actual + '!==' + expected);
  }
};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Rabbit", "Rabbit");
assertEqual(100, 101);
