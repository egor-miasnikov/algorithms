const assert = require('assert');

const simpleSearch = (list, item)=> {
    console.time('Simple search');
    let iterations;
    for(literations = 0; iterations <= list.length; iterations++) {
        if(list[iterations] === item) {
            console.timeEnd('Simple search');
            return {
                item: list[iterations],
                iterations: iterations
            }
        }
    }
    console.timeEnd('Simple search');
    return {
        item: false,
        iterations: iterations
    }
}

const list = [1,2,3,4,5,6,7,8];

let result = simpleSearch(list, 8);
assert.equal(result.item, 8);
assert.equal(result.iterations, 7);

result = simpleSearch(list, 7);
assert.equal(result.item, 7);
assert.equal(result.iterations, 6);

result = simpleSearch(list, 6);
assert.equal(result.item, 6);
assert.equal(result.iterations, 5);

result = simpleSearch(list, 9);
assert.equal(result.item, false);
assert.equal(result.iterations, 8);