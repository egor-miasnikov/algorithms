const assert = require('assert');

const biggestNumber = (arr) => {
    if (arr.length === 1) { 
        return arr[0]; 
    }

    if (arr[0] < arr[1]) { 
        arr.splice(0,1); 
    } else { 
        arr.splice(1,1); 
    }
    return biggestNumber(arr);
}

assert.equal(biggestNumber([1,3,5,7,4,9]), 9);
assert.equal(biggestNumber([1,3,5,4,7,15,4,9,9,11]), 15);