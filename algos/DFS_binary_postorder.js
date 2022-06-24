class Node {
    constructor(item) {
        this.key = item;
        this.left = this.right = null;
    }
}
 
var root;
 
    /*
     * Given a binary tree, print its nodes according to the "bottom-up" postorder
     * traversal.
     */
    function printPostorder(node) {
        if (node == null)
            return;
 
        // first recur on left subtree
        printPostorder(node.left);
 
        // then recur on right subtree
        printPostorder(node.right);
 
        // now deal with the node
        console.log(node.key + " ");
    }
 
     
    // Driver method
 
        root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
 
        console.log("\nPostorder traversal of binary tree is<br/> ");
        printPostorder(root);