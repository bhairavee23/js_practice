// Breadth First Search 
let tree = {
    "10": {
        value: "10",
        left: "4",
        right: "17",
    },
    "4": {
        value: "4",
        left: "1",
        right: "9",
    },
    "17": {
        value: "17",
        left: "12",
        right: "18",
    },
    "1": {
        value: "1",
        left: null,
        right: null,
    },
    "9": {
        value: "9",
        left: null,
        right: null,
    },
    "12": {
        value: "12",
        left: null,
        right: null,
    },
    "18": {
        value: "18",
        left: null,
        right: null,
    },
};

let BFS = (tree, rootNode, searchValue) => {
    console.log(tree)
    let queue = [];
    queue.push(rootNode);
    console.log(rootNode);
    while(queue.length > 0) {
        let currentNode = queue[0];
        console.log(currentNode);
        console.log("current node is "+ currentNode.value);

        if(currentNode.value === searchValue) {
            console.log("Found it");
            return;
        }

        if(currentNode.left !== null) {
            queue.push(tree[currentNode.left]);
        }

        if(currentNode.right !== null) {
            queue.push(tree[currentNode.right]);
        }

        queue.shift();
    }
    console.log("no such node found");
}

    

    BFS(tree, tree[10], "15");
