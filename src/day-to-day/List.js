/*
 * This is a list and we represent it by demonstrating the interaction between
 * memory and a data structure. This is an ordered sequence of values
 * - There is no perfect data structure, it depends on your use-case
 * - Data structures generally perform 4 types of actions: Accessing, Searching, Inserting, Deleting
 * - They can be good at one and bad at another
 */

class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  /**
   * get method enables us to access an item in our list,
   * we're using a simple array here
   * constant O(1)
   * @param value
   * @returns {*}
   */
  get(address) {
    return this.memory[address];
  }

  /**
   * push method inserts an item at the end of our list and increments
   * the length
   * constant O(1) Excellent
   * @param value
   */
  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  /**
   * pop method removes an item at the end of our list and decrements
   * the length
   * constant O(1) - Excellent
   * @returns {*}
   */
  pop() {
    if (this.length === 0) return;

    let lastAddress = this.length - 1;
    let value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    return value;
  }

  /**
   * unShift inserts a value to the beginning of our list and
   * increments the size. it slides all previous values over
   *
   *     [a, b, c, d, e]
   *      0  1  2  3  4
   *       ⬊  ⬊  ⬊  ⬊  ⬊
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]
   *
   * O(N) - Reasonable
   * @param value
   */
  unshift(value) {
    let previous = value;

    for (let address = 0; address < this.length; address++) {
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    this.memory[this.length] = previous;
    this.length++;
  }

  /**
   * shift removes a value to the beginning of our list and
   * decrements the size.
   *
   *  [x, a, b, c, d, e]
   *      1  2  3  4  5
   *    ⬋  ⬋  ⬋  ⬋  ⬋
   *   0  1  2  3  4
   *  [a, b, c, d, e]
   *
   *
   * O(N) - Reasonable
   * @returns {*} - value
   */

  shift() {
    if (this.length === 0) return;

    let value = this.memory[0];

    for (let address = 0; address < this.length - 1; address++) {
      this.memory[address] = this.memory[address + 1];
    }

    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

export default List;
