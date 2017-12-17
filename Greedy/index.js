const asserts = require('assert');

let stations = {};

stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

let finalStations = new Set();
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut","ca",  "az"]);

while(statesNeeded.size){    
    let bestStation = null;
    let statesCovered = new Set();
    for (station in stations) {
        const states = stations[station];
        const covered = new Set([...statesNeeded].filter(x => states.has(x)));
        if (covered.size > statesCovered.size) {
            bestStation = station;
            statesCovered = covered;
        }
    }
    
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)))
    finalStations.add(bestStation)
}

asserts.deepEqual(finalStations, new Set(['kone', 'ktwo', 'kthree', 'kfive']));