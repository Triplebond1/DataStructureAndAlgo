class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
  
    constructor(value: number) {
      this.value = value;
    }
  }
  
  class BinaryTree {
    root: TreeNode | null = null;
  
    insert(value: number) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      const queue: TreeNode[] = [this.root];
        while (queue.length) {
            console.log("queue length:",queue.length)
            let current = queue.shift()!;
            console.log("current:",current)
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          queue.push(current.left);
        }
  
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          queue.push(current.right);
        }
      }
      }
      
      breadthFirstSearch(): number[] {
        const result: number[] = [];
        const queue: TreeNode[] = [];
      
        if (this.root) queue.push(this.root);
      
        while (queue.length) {
          const current = queue.shift()!;
          result.push(current.value);
      
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
        }
        
          console.log("breadthFirstSearch",result)
        return result;
      }
      
      preOrderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
        if (!node) return result;
      
        result.push(node.value);                    // Root
        this.preOrderTraversal(node.left, result);  // Left
        this.preOrderTraversal(node.right, result); // Right
        
          console.log("preOrderTraversal:",result)
        return result;
      }
      
      inOrderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
        if (!node) return result;
      
        this.inOrderTraversal(node.left, result);   // Left
        result.push(node.value);                    // Root
        this.inOrderTraversal(node.right, result);  // Right
        
          console.log("inOrderTraversal:",result)
        return result;
      }

      postOrderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
        if (!node) return result;
      
        this.postOrderTraversal(node.left, result);  // Left
        this.postOrderTraversal(node.right, result); // Right
        result.push(node.value);                     // Root
        
          console.log("postOrderTraversal:",result)
        return result;
      }
      
      // helper to find min value node
  private findMin(node: TreeNode): TreeNode {
    while (node.left) node = node.left;
    return node;
  }

  delete(value: number, node = this.root): TreeNode | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      // found node to delete

      // 1. No child
      if (!node.left && !node.right) return null;

      // 2. One child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // 3. Two children
      const successor = this.findMin(node.right);
      node.value = successor.value;
      node.right = this.delete(successor.value, node.right);
    }

    return node;
  } 
  }
  

  const bt = new BinaryTree();
bt.insert(10);
bt.insert(6);
bt.insert(15);
bt.insert(3);
bt.insert(8);
bt.insert(20);
bt.breadthFirstSearch()
bt.inOrderTraversal()
bt.preOrderTraversal()
bt.postOrderTraversal()
console.log(JSON.stringify(bt, null, 2));
