// 1. Make this object iterable using for..of

let daysOfYears = {
  from: 1,
  to: 365,
};

daysOfYears[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

// 2. We can merge daysOfYears with our iterator to simplify the code
let daysOfYearsSimplified = {
  from: 1,
  to: 365,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return {
        done: false,
        value: this.current++,
      };
    } else {
      return {
        done: true,
      };
    }
  },
};

// 3: We can now use for..of easily
for (let day of daysOfYearsSimplified) {
    // do something
}

export { daysOfYearsSimplified }
