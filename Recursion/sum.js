const assert = require('assert')

const sum = (arr) => {
    if(arr.length === 1) {
        return arr[0];
    } else {
        return arr[0] + sum(arr.splice(1));
    }
}

assert.equal(sum([1,2,3]), 6);