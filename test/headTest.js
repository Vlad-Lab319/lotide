// const assertEqual = require('../assertEqual');
// const head = require('../head');

// // Test code
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), ["Hello"]);
// assertEqual(head(["Lighthouse", "Labs"]), "Hello");
// assertEqual(head([6,7]), 5);

const assert = require('chai').assert;
const head = require('../head');

describe("#head returns first element of the array ", () => {
  it("for [1, 2, 3] it should be 1", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("for ['5'] it should be '5'", () => {
    assert.strictEqual(head(['8']), '8');
  });

  it("for [5,6,7] it should be '5'", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("for ['Hello', 'Lighthouse', 'Labs'] it should be 'Hello'", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });

  it("for [] it should be not equal to 'Hello'", () => {
    assert.notStrictEqual(head([]), 'Hello');
  });
});