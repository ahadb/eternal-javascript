import BSTNode from "./BSTNode.js";

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
    const newNode = new BSTNode(value);
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
  find(value) { // returns the node if found and false if not found
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

  contains(value) { // contains returns true or false based on finding node, not node itself
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
}

/*
const tree = new BST();
tree.root = new BSTNode(10);
tree.root.right = new BSTNode(20);
tree.root.left = new BSTNode(5);
tree.root.left.right = new BSTNode(7);

            10
        5       13
      2   7   11  16
 */
