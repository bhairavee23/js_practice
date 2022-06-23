class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
     
 
    /* Given a binary tree, print its nodes in inorder */
     const printInorder = (node) => {
        if (node === null)
            return;
 
        /* first recur on left child */
        printInorder(node.left);
 
        /* then print the data of node */
        console.log(node.key + " ");
 
        /* now recur on right child */
        printInorder(node.right);
    }
 
    // Driver method
 
        var root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
 
        console.log("Inorder traversal of binary tree is ");
        printInorder(root);