import SinglyLinkedList from "../src/SinglyLinkedList.js";

class Queue {
  constructor() {
    // Stack is based on Linked list as structures can be similar
    this.linkedList = new SinglyLinkedList();
    this.size = 0;
  }

  /**
   * Enqueue Method - Add a new element to the end of the queue (tail of linked list)
   * @params: val
   */
  enqueue(val) {
    this.linkedList.push(val);
    this.size++;
  }

  /**
   * Dequeue Method - Remove the element at the front of the queue (head of linked list)
   * @params: none
   * @returns: {-}
   */
  dequeue() {
    const removeHead = this.linkedList.shift();
    this.size--;

    return removeHead ? removeHead.val : null;
  }

  /**
   * Peek method - Reads the value from the front of the queue
   * @params: none
   * @returns: {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.val;
  }

  /**
   * isEmpty Method - Checks if the queue is empty
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * toString method - Returns a string representation of queue's linked list
   * @params: none
   * @returns: {-}
   */
  toString(cb) {
    return this.linkedList.toString(cb);
  }
}

export default Queue;


const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();
q.dequeue();

console.log(q.peek());      // 3
console.log(q.toString());  // 3,4
console.log(q);
