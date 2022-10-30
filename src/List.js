class List {
    constructor() {
        this.store = [];
        this.length = 0;
    }

    /**
     * get method enables us to access an item in our list,
     * we're using a simple array here
     * constant O(1) !!
     * @param value
     * @returns {*}
     */
    get(value) {
        return this.store = [value];
    }

    /**
     * push method inserts an item at the end of our list and increments
     * the length
     * constant O(1) Excellent
     * @param value
     */
    push(value) {
        this.store[this.length] = value;
        this.length++;
    }

    /**
     * pop method removes an item at the end of our list and decrements
     * the length
     * constant O(1) - Excellent
     * @returns {*}
     */
    pop() {
        if (this.length === 0) {
            return;
        }

        let lastItem = this.length - 1;
        let value = this.store[lastItem];
        delete this.store[lastItem];
        this.length--;

        return value;
    }

    /**
     * unShift inserts a value to the beginning of our list and
     * increments the size. it slides all previous values over
     * O(N) - Reasonable
     * @param value
     */
    unshift(value) {
        let previous = value;

        for (let item = 0; item < this.length; item++) {
            // replace and slide over
            let current = this.store[item];
            this.store[item] = previous;
            previous = current;
        }

        this.store[this.length] = previous;
        this.length++;
    }

    /**
     * shift removes a value to the beginning of our list and
     * decrements the size.
     * O(N) - Reasonable
     * @returns {*} - value
     */
    shift() {
        if (this.length === 0) {
            return;
        }

        let value = this.store[0];

        for (let item = 0; item < this.length - 1; item++) {
            this.store[item] = this.store[item + 1];
        }

        // last item is the previous item in store, so delete
        delete this.store[this.length - 1];
        this.length--;

        return value;
    }
}

export default List;