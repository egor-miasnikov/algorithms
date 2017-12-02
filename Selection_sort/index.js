const assert = require('assert');

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for(let i = 1; i <= arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

const selectionSort = (arr) => {
    console.time('Selecction Sort');
    let sortedArray = [];
    let arrayLength = arr.length;
    for(let i = 0; i <= arrayLength; i++) {
        let smallestIndex = findSmallest(arr);
        let element = arr.splice(smallestIndex,1)[0];
        if(element) {
            sortedArray.push(element);
        }
    }
    console.timeEnd('Selecction Sort');
    return sortedArray;
}

let arr = [3,4,2,5,6,1,7]

assert.deepEqual(selectionSort(arr), [1,2,3,4,5,6,7]);