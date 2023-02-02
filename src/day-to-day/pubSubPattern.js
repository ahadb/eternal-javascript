/**
 * @desc
 * PubSub class or pattern allows us to create modules that can communicate with each
 * other and that are decoupled.
 *
 * @class PubSub
 */
class PubSub {
  constructor() {
    // event subscriptions and their callback [fns]
    this.events = {};
  }

  /**
   * @mthod subscribe
   * @param eventName
   * @param func
   * @returns {{unsubscribe: unsubscribe}}
   *
   * @todo logger, could be written as two different methods, etc.
   */
  subscribe(eventName, func) {
    if (this.events[eventName]) {
      this.events[eventName].push(func);
    } else {
      this.events[eventName] = [func];
    }

    return {
      unsubscribe: () => {
        const funcs = this.events[eventName];
        const idx = funcs.indexOf(func);
        if (idx > -1) {
          funcs.splice(idx, 1);
        }
      },
    };
  }

  /**
   * @method publish
   * @param eventName
   * @param args
   *
   * @todo logger
   */
  publish(eventName, ...args) {
    const funcs = this.events[eventName];
    if (Array.isArray(funcs)) {
      funcs.forEach((func) => {
        func.apply(null, args);
      });
    }
  }
}

/*
const greet = (greeting) => {
  console.log(`Hi there, my name is ${greeting}, welcome to my class!`);
};

const greetEveryone = (a, b, c) => {
  console.log(`Hi there, our name's are ${a}, ${b}, ${c}`);
};

const pubSub = new PubSub();

const teacher = pubSub.subscribe("classroom", greet);
const dinner = pubSub.subscribe("dinnerWithFriends", greetEveryone);

pubSub.publish("classroom", "Mr. Rogers");
pubSub.publish("dinnerWithFriends", "Alexis", "Jason", "Danielle");

teacher.unsubscribe();
dinner.unsubscribe
console.log(pubSub.events);
*/
