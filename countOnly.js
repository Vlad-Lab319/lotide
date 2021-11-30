// //Emojis
// const pass = String.fromCodePoint(0x1F600);
// const fale = String.fromCodePoint(0x1F47A);

// // Function implementation
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(pass, pass, pass, `Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(fale, fale, fale, `Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //console.log('looping all items ', item);
    //console.log('checking itemsToCount true or faulse: ', itemsToCount[item]);
    if(itemsToCount[item]) {
      if (results[item]) {
        results[item] +=1;
      } else {
        results[item] = 1;
      }
    }
    
  }
  //console.log('counted results: ', results);
  return results;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;