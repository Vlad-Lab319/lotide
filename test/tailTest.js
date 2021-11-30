const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test code
// assertEqual(tail([5,6,7,8]), [6,7,8]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail([]), "Hello");
// assertEqual(tail(["Lighthouse"]), "Hello");
// assertEqual(tail([]),[]);
// assertEqual(tail([5,6,7]), [9,7]);


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs");

const result2 = tail([5, 6, 7, 8]);
assertEqual(result2.length, 3);
assertEqual(result2[0], 6); 
assertEqual(result2[1], 7);
assertEqual(result2[2], 8);

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(words);

