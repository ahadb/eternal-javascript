class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * Insert method - inserts a Node in the BST and returns
   * the node inserted
   * @param value
   * @returns {BST|*}
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) {
          // dupes
          return undefined;
        }
        if (value < current.value) {
          // left
          if (current.left === null) {
            // left node does not exist
            current.left = newNode;
            return this;
          } else {
            // already is left, current should be new root node
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  /**
   * Find method - finds a Node in the BST and returns
   * the Node if found, else returns false
   * @param value
   * @returns {BST|*}
   */
  find(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      // while something to loop over and we have not found it
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return current;
  }

  /**
   * Contains method - returns true or false based on finding node, not node itself
   * the Node if found, else returns false
   * @param value
   * @returns {Boolean}
   */
  contains(value) {
    // contains
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      // while something to loop over and we have not found it
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      return data;
    }
  }

  /*
  QUEUE: []
  DATA: []

         10
      6      15
    3   8       20

   */
}

/*
const tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(20);
tree.root.left = new Node(5);
tree.root.left.right = new Node(7);

            10
        5       13
      2   7   11  16
 */

export {Node, BST}
