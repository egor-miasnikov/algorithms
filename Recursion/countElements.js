const assert = require('assert');

const countElements = (arr) => {
    if(arr.length === 1){
        return 1;
    } else {
        return 1 + countElements(arr.splice(1));
    }
}

assert.equal(countElements([1,2,3]), 3);
assert.equal(countElements([1,2,3,4,5,6,7,8,8,9,10]), 11);