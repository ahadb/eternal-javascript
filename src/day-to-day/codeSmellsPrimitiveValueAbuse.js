/**
 * @desc
 * Code should be readable by humans and limit cognitive overload
 * and excessive mental parsing. Absuing primitive values cause
 * such overload when created a mental model
 *
 */

// while this will work, it take a lot to understand it
function getUser(name, birthDate, phone, address) {
  //..

  let ms_diff = Date.now() - birthDate.getTime();
  let age_dt = new Date(ms_diff);
  let age = Math.abs(age_dt.getUTCFullYear() - 1970);

  //..
}

// better solution that allows a higher level of abstraction
// instead of having to understand what is going on we focus
// one parameter and a getAge method to do it for us

function getUserAbstraction(user) {
  let age = user.getAge();
}
