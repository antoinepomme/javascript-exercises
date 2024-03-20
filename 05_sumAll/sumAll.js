const sumAll = function(startNumber, endNumber) {
  let sum = 0;

  if (startNumber < 0 || endNumber < 0 || typeof startNumber != 'number' || typeof endNumber != 'number' ) {
    return "ERROR";
  }

  if (startNumber > endNumber) {
    let tmp = startNumber;
    startNumber = endNumber;
    endNumber = tmp;
  }

  for (let i = startNumber; i <= endNumber; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
