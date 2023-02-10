/*
  More on readability :/
  Async/Await helps avoid callback hell and makes our code
  look more asynchronous
*/
const messageNotifier = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
};

// reminder, an async function automatically converts the
// return value to a promise so i can be consumed by await
const message = async () => {
  return "Message";
};

// this is much more readable to developers when compared with
// a promise chain - less mental parsing :/
const handleNotifier = async () => {
  let result = "";

  // beauty of await is that it will stop the control flow
  // of execution until the promise is resolved or rejected

  try {
    result = await messageNotifier("First");
    console.log(result);
    result = await messageNotifier("Second");
    console.log(result);
    result = await messageNotifier("Third");
    console.log(result);
  } catch (err) {
    // now any error in any of your promises can be
    // handled within one catch block
  }
};

handleNotifier();
