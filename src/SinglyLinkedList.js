import LinkedListNode from "../src/LinkedListNode.js";

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Push method - Inserts LinkedListNode to the end of a list
     * Note: this method could also be called `append`
     * @params: val
     * @returns: SinglyLinkedList
     */
    push(val) {
        var newNode = new LinkedListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    /**
     * Pop method - Removes a LinkedListNode from the end of a list
     * Note: this method could also be called deleteHead
     * @params: none
     * @returns: LinkedListNode
     */
    pop() {
        if (!this.head) return undefined;

        var current = this.head;
        var newTail = current;

        while (current.next) {
            // traverse list
            newTail = current; // set new tail to current, till it reaches end
            current = current.next; // move forward one
        }

        /*
        console.log(current.val);
        console.log(newTail.val);

        ONE -> TWO -> END
                c
                       nT
        */

        this.tail = newTail; // severs the connection
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            // if there is one item and you pop
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    /**
     * Unshift method - Add a LinkedListNode to the beginning of a list
     * Note: this method could also be called `prepend`
     * @params: val
     * @returns: SinglyLinkedList
     */
    unshift(val) {
        var newNode = new LinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        newNode.next = this.head; // set next node to previous head
        this.head = newNode; // set current head to new node
        this.length++;

        return this;
    }

    /**
     * Shift method - Removes a LinkedListNode from the beginning of a list
     * Note - this method could also be called deleteHead
     * @params: none
     * @returns: LinkedListNode
     */
    shift() {
        if (!this.head) return undefined;

        var currentHead = this.head; // variable stores head
        this.head = currentHead.next; // set current head.next to this.head (point to next node)
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    /**
     * Get method - Retrieve a node by it's position in a list
     * @params: {index}
     * @returns: LinkedListNode
     */
    get(index) {
        if (index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;

        while (counter !== index) {
            // traverse the list, when counter equals index, we've found our node
            current = current.next; // update current with next node
            counter++;
        }

        return current; // return it!
    }

    /**
     * Set method - Change the value of a LinkedListNode based on it's position in a list
     * @params: { index, val }
     * @returns: Boolean
     */
    set(index, val) {
        var foundNode = this.get(index); // use get
        if (foundNode) {
            foundNode.val = val; // set foundNode val to param
            return true;
        }
        return false;
    }

    /**
     * Insert method - Inserts a node at specified index
     * @params: { index, val }
     * @returns: Boolean // questionable
     */
    insert(index, val) {
        if (index < 0 || index > this.length) return false; // safe guard
        if (index === this.length) return !!this.push(val); // insert at end
        if (index === 0) return !!this.unshift(val); // insert in beginning, coerce unshift (returns {Node}) return to bool

        // logic to insert anywhere into middle
        var newNode = new LinkedListNode(val);
        var prev = this.get(index - 1); // get previous node
        var temp = prev.next; // use placeholder and save what is in prev
        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    /**
     * Remove method - Removes a node at specified index
     * @params: { index, val }
     * @returns: LinkedListNode
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined; // safe guard
        if (index === 0) return this.shift(); // remove from beginning
        if (index === this.length - 1) return this.pop(); // remove from end

        // logic to remove anywhere from middle
        var previousNode = this.get(index - 1); // get previous node
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() { // TODO
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    /**
     * toArray - Array representation of LinkedList
     * @param: none
     * @returns {Array}
     */
    toArray() {
        var nodes = [];
        var current = this.head;
        while (current) {
            nodes.push(current.val);
            current = current.next;
        }
        return nodes;
    }

    /**
     * toString method - String representation of a linked list
     * @param: {*} cb (callback fn)
     * @returns {String}
     */
    toString(callback) {
        return this.toArray()
            .map((node) => node.toString(callback))
            .toString();
    }
}

export default SinglyLinkedList;