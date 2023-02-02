/**
 * @desc
 * example of mocking async manually
 */

const fetchData = callback => {
  setTimeout(() => {
    callback('Data fetched!');
  }, 1500)
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData(text => {
    console.log(text)
  })
}, 2000);

console.log("I run");
console.log("...first");
// I run
// ...first
// Timer is done!
// Data fetched!
