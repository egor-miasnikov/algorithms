const assests = require('assert');

const findLowestCostNode = (costs, processed) => {
    let lowestConst = Infinity;
    let lowestCostNode = null;

    for(node in costs){
        let cost = costs[node];

        if(cost < lowestConst && !processed[node]) {
            lowestConst = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}
const dijkstra = () => {
    let processed = {};

    let node = findLowestCostNode(costs, processed);

    while(node !== null){
        let cost = costs[node];
        let neighbors = graph[node]
        
        for(n in neighbors){
            let newCost = cost + neighbors[n];
            if(costs[n] > newCost){
                costs[n] = newCost;
                parents[n] = node;
            }
        } 
        processed[node] = true;
        node = findLowestCostNode(costs, processed)
    }

}

let graph = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        fin: 1
    },
    b: {
        a: 3,
        fin: 5
    },
    fin:{

    }
}

let costs = {
    a: 6,
    b: 2,
    fin: Infinity
}

let parents = {
    a: 'start',
    b: 'start',
    fin: null
}

dijkstra();
assests.deepEqual(costs, { a: 5, b: 2, fin: 6 })