const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    return [];
  } else {
    let middleIndex = Math.floor(array.length / 2);
    // console.log(middleIndex);
    if (array.length % 2 === 0) {
      // console.log('even');
      middleArray.push(array[middleIndex - 1]);
      middleArray.push(array[middleIndex]);

    } else {
      // console.log('odd');
      middleArray.push(array[middleIndex]);
    }
  }
  return middleArray;
};

module.exports = middle;
