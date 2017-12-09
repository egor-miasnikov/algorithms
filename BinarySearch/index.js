const assert = require('assert');

const binarySearch = (list, item) => {
    console.time('binarySearch');

    let floor = 0;
    let ceiling = list.length - 1;
    let iterations; //need to count of iteration of algorithm

    for (iterations = 0; floor <= ceiling; iterations++) {
        let center = Math.floor((floor + ceiling) / 2);
        let guess = list[center];

        if (guess === item) {
            console.timeEnd('binarySearch');
            return {
                item: guess,
                iterations: iterations
            };
        }
              
        if (guess > item) {
            ceiling = center - 1;
        } else {
            floor = center + 1;
        }
    }

    console.timeEnd('binarySearch');
    return {
        item: false,
        iterations: iterations
    };
}

const list = [1,2,3,4,5,6,7,8];

let result = binarySearch(list, 8);
assert.equal(result.item, 8);
assert.equal(result.iterations, 3);

result = binarySearch(list, 7);
assert.equal(result.item, 7);
assert.equal(result.iterations, 2);

result = binarySearch(list, 6);
assert.equal(result.item, 6);
assert.equal(result.iterations, 1);

result = binarySearch(list, 9);
assert.equal(result.item, false);
assert.equal(result.iterations, 4);