const assert = require('assert');

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];


const isMangoBuyer = (person) => {
    return person.length > 6 ? true : false; 
}

const breadthFirstSearch = (graph, name) => {
    console.time('breadthFirstSearch');
    let searchQueue = [...graph[name]];
    let searchedPersons = {};

    while(searchQueue.length > 0) {
        let person = searchQueue.shift();
        
        if(!searchedPersons[person]){
            if(isMangoBuyer(person)){
                console.timeEnd('breadthFirstSearch');
                return true;
            }else{
                searchQueue.push(...graph[person]);
            }
            searchedPersons[person] = true;
        }
    }
    console.timeEnd('breadthFirstSearch');
    return false;
};


assert.equal(breadthFirstSearch(graph, 'you'), false);

graph["jonny"] = ['jafferson'];

assert.equal(breadthFirstSearch(graph, 'you'), true);