class Node{
    constructor(val){

        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){

        this.root = null
    };

    insert(val){
        let newNode = new Node(val)
        if(this.root = null){
            this.root = newNode

            return this
        }
        else{
            let current = this.root
            while(true){
                if(val === current.val) return undefined //if any duplicates, then return to avoid infinite loop
                
                if(val < current.val){//if true, then we will look to the left node
                    if(current.left === null){
                        current.left = newNode
                        return this
                    }else{
                        current = current.left
                    }

                }else if(val > current.val){//if true, then we will look to the right node
                    if(current.right === null){
                        current.right = newNode
                        return this
                    }else{
                        current = current.right
                    }
                } 
            }

        }
    };

    contains(val){
        if(this.root = null) return false

        let current = this.root,
            found = false;

        while(current && !found){
            if(val < current.val){
                current = current.left
            }else if(val > current.val){
                current = current.right
            }else{
                // found = true

                return true
            }
        }
        // if(!found) return false
        // return current

        return false

    };

    BFS(){

        let node = this.root,
            data = [],
            queue = []
        
        queue.push(node)

        while(queue.length){
            node = queue.shift() //FIFO - First In, First Out
            data.push(node.val)

            if(node.left) return queue.push(node.left)
            if(node.right) return queue.push(node.right)


        }



        return data
    };

    DFSPreOrder(){ //travsering through each node recursively using a helper function called traverse
        let data = []

        function traverse(node){ 
            data.push(node.val)

            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)

        return data
    };

    DFSPostOrder(){
        let data = []

        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)

            data.push(node.val)
        }
        traverse(this.root)

        return data
    };

    DFSInOrder(){
        let data = []

        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.val)
            if(node.right) traverse(node.right)

        }
        traverse(this.root)
        return data  
    };

}


let tree = new BinarySearchTree()

// tree.root = new Node(10)
// tree.root.right = new Node(17)
// tree.root.left = new Node(7)
// right.root.left.right = new Node(9)

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)


tree.DFSPreOrder()
tree.DFSPostOrder()
tree.DFSInOrder()