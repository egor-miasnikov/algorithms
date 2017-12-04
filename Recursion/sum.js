const assert = require('assert')

const sum = (arr) => {
    let finalSum = 0; 
    if(arr.length === 1) {
        return arr[0];
    } else {
        return arr[0] + sum(arr.splice(1));
    }
}

assert.equal(sum([1,2,3]), 6);