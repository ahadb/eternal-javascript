/**
 * @desc
 * Singleton is a design pattern that tells us we can only create
 * one instance of a class and that instance can be accessed globally
 *
 * @class Singleton
 * @returns {Singleton Instance}
 */

class Singleton {
  constructor() {
    if (Singleton.instance) {
      throw new Error('Singleton classes cannot be instantiated more than once.')
    }

    Singleton.instance = this;

    // constructor code and methods
  }
}

export default Singleton;
