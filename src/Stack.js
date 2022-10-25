import SinglyLinkedList from "../src/SinglyLinkedList.js";

class Stack {
  constructor() {
    // Stack is based on Linked list as structures can be similar
    this.linkedList = new SinglyLinkedList();
  }

  /**
   * Push method - Lay the value on top of the stack
   * @params: {*} value
   * @returns: {*}
   */
  push(val) {
    this.linkedList.unshift(val);
  }

  /**
   * Pop - Remove the top from the stack
   * @params: {*} value
   * @returns: {*}
   */
  pop() {
    const removedHead = this.linkedList.shift();
    return removedHead ? removedHead.val : null;
  }

  /**
   * Empty method - Checks if the stack is empty (if it doesn't have a head)
   * @params: none
   * @returns: {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Peek method - Reads the value from the start of the linked list
   * @params: none
   * @returns: {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.val;
  }
}

export default Stack;
