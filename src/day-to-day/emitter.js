function EventEmitter() {
  let listeners = {};
  let oneTimeListeners = {};

  function deleteListener(listenersList, eventName) {
    delete listenersList[eventName];
  }

  return {
    on: (eventName, callback) => {
      if (Array.isArray(listeners[eventName])) {
        listeners[eventName].push(callback);
      } else {
        listeners[eventName] = [callback];
      }
    },
    off: (eventName) => {
      deleteListener(listeners, eventName);
    },
    emit: (eventName, ...args) => {
      if (listeners[eventName]) {
        listeners[eventName].forEach((callback) => {
          callback(...args);
        });
      }

      if (oneTimeListeners[eventName]) {
        oneTimeListeners[eventName].forEach((callback) => {
          callback(...args);
        });
        deleteListener(oneTimeListeners, eventName);
      }
    },
    listenersCount: (eventName) => listeners[eventName].length,
    rawListeners: (eventName) => listeners[eventName],
  };
}

/*
let emitter = new EventEmitter();

function callback1(name, message) {
  console.log(`callback 1 - ${name} called with message - ${message}`);
}
function callback2(name, message) {
  console.log(`callback 2 - ${name} called with message - ${message}`);
}
function callback3() {
  console.log(`callback 3 called`);
}

emitter.on("on-load", callback1);
emitter.on("on-load", callback2);
emitter.once("on-click", callback3);

// Emitting with multiple cbs
emitter.emit("on-load", "cbName", "Hello");
emitter.emit("on-load", "cbName", "Hello");

emitter.emit("on-click"); // callback 3 called
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens

// unsubscribe
emitter.off("on-load");

emitter.emit("on-load", "cbName", "Hello");
*/
