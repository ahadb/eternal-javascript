/**
 /**
 * @desc
 * example of mocking async with a promise chain
 */

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1500);
  });

  return promise;
};

setTimeout(() => {
  console.log("Timer is complete!");
  fetchData
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("I run");
console.log("...first");
