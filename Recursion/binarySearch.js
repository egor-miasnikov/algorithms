const assert = require('assert');

const binarySearch = (list, item, head = 0, tail = list.length - 1) => {
    if (tail >= head){
        let center = Math.floor((head + tail) / 2);
        let guess = list[center]

        if(guess === item){
            return guess
        } else if(guess > item) {
            return binarySearch(list, item, head, center - 1);
        } else {
            return binarySearch(list, item, center + 1, tail);
        }
    } else {
        return false;
    }
}

const list = [1,2,3,4,5,6,7,8];

assert.equal(binarySearch(list, 8), 8);
assert.equal(binarySearch(list, 2), 2);
assert.equal(binarySearch(list, 4), 4);
assert.equal(binarySearch(list, 9), false);