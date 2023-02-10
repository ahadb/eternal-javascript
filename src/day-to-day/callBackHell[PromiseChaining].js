/*
 Callback hell using promises chaining, this code looks very
 asynchronous. Most people find it hard to read as our brains
 are wired to be synchronous. Async/Await helps
*/
const messageNotifier = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
};

// nested callbacks, /ie: callback hell
messageNotifier("First")
  .then((message) => {
    console.log("Resolved", message);
    messageNotifier("Second")
      .then((message) => {
        console.log("Resolved", message);
        messageNotifier("Third")
          .then((message) => {
            console.log("Resolved", message);
            messageNotifier("Fourth")
              .then((message) => {
                console.log("Resolved", message);
                messageNotifier("Fifth")
                  .then((message) => {
                    console.log("Resolved", message);
                    messageNotifier("Sixth")
                      .then((message) => {
                        console.log("Resolved", message);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

/*
 Depends on your use-case, but don't do this, this is not chaining
 nor is the result passed to each other, instead it's processed
 independently
*/

// this promise resolves to a value without explicitly passing in a param
let myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

// all handlers recieve the same value
myPromise.then((message) => {
  let userMessage = getUser(message);
  return userMessage;
});

messageNotifier.then((message) => {
  let userMessage = getUser(message);
  return userMessage;
});

messageNotifier.then((message) => {
  let userMessage = getUser(message);
  return userMessage;
});

messageNotifier.then((message) => {
  let userMessage = getUser(message);
  return userMessage;
});
