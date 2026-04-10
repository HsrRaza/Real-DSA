class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}
function heapifyTree(root){
    if(!root) return null;

    // first heapify children (bottom up)

    heapifyTree(root.left);
    heapifyTree(root.right);

    // then sink down current node;
    sinkDownTree(root);
}

function sinkDownTree(node){
     while(node){
        let largest = node;
        let leftChild = node.left;
        let rightChild = node.right;

         // Find biggest among node and children
        if(leftChild && leftChild.val > largest.val) {
            largest = leftChild;
        }
        if(rightChild && rightChild.val > largest.val) {
            largest = rightChild;
        }
        
        // If node is biggest, stop
        if(largest === node) break;
        
        // Swap values (not nodes!)
        [node.val, largest.val] = [largest.val, node.val];
        
        // Continue sinking down
        node = largest;
     }
}

