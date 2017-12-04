const assert = require('assert');

const binarySearch = (list, item) => {
    let head = 0; 
    let tail = list.length - 1; 
    if (tail >= head){
        let center = Math.floor((head + tail) / 2);
        let guess = arr[center]

        if(guess === item){
            return guess
        } else if(guess > item) {
            return binarySearch(arr.splice(head, center - 1), item);
        } else {
            return binarySearch(arr.splice(center + 1, tail), item);
        }
    } else {
        return false;
    }
}

const list = [1,2,3,4,5];

assert.equal(binarySearch(list, 5), 5);
assert.equal(binarySearch(list, 4), 4);
// assert.equal(binarySearch(list, 5), 5);
// assert.equal(binarySearch(list, 2), 2);
assert.equal(binarySearch(list, 6), false);