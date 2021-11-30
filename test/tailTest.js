const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail returns remaining of the array after the first element", () => {
  it("for [5, 6, 7, 8] it should be [6, 7, 8]", () => {
    assert.deepEqual(tail([5, 6, 7, 8]), [6, 7, 8]);
  });

  it("for ['Hello', 'Lighthouse', 'Labs'] it should not be equal to ['Hello']", () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello"]);
  });

  it("for [] it should not be equal ['Labs']", () => {
    assert.notDeepEqual(tail([]), ['Labs']);
  });

  it("for ['Apple', 'Banana', 'Plum', 'Peach'] it should be ['Banana', 'Plum', 'Peach']", () => {
    assert.deepEqual(tail(['Apple', 'Banana', 'Plum', 'Peach']), ['Banana', 'Plum', 'Peach']);
  });

  it("for [5, [6, 7], 8] it should be [[6, 7], 8]", () => {
    assert.deepEqual(tail([5, [6, 7], 8]), [[6, 7], 8]);
  });
});