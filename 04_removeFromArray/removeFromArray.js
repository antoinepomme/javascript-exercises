const removeFromArray = function(array, ...args) {
  let newArray = [];
  let result = 1;

  for (let i = 0; i < array.length; i++) {
    result = 1;
    for (let j = 0; j < args.length; j++) {
      if (array[i] === args[j]) {
        result = 0;
      }
    }
    if (result == 1) {
      newArray.push(array[i]);
    }    
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
