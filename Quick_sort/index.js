const assert = require('assert');

const quickSort = (list) => {
    if(list.length < 2) {
        return list;
    }

    const pivot = list[0];
    const less = list.slice(1).filter(key => key <= pivot);
    const greater = list.slice(1).filter(key => key > pivot);
    
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

let list = [2,1,5,7,6]

assert.deepEqual(quickSort(list), [1,2,5,6,7]);