class Node{
    constructor(key){
        this.left = null
        this.right = null
        this.val = key
    }
}
 
// A function to do preorder tree traversal
function printPreorder(root){
 
    if(root){
 
        // First print the data of node
        console.log(root.val," ")
 
        // Then recur on left child
        printPreorder(root.left)
 
        // Finally recur on right child
        printPreorder(root.right)
    }
}
 
// Driver code
let root =  new Node(1)
root.left =  new Node(2)
root.right =  new Node(3)
root.left.left =  new Node(4)
root.left.right =  new Node(5)
console.log("Preorder traversal of binary tree is","</br>")
printPreorder(root)