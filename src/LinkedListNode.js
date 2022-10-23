class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.val) : `${this.val}`;
    }
}

export default Node;