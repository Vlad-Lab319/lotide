const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle returns one middle element of the array for odd arrays or two elements for even', () => {
  it('should be [4] for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it('should be [4, 5] for [1, 2, 3, 4, 5, 6, 7, 99]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 99]), [4, 5]);
  });

  it('should be [] for [7, 99]', () => {
    assert.deepEqual(middle([7, 99]), []);
  });
});