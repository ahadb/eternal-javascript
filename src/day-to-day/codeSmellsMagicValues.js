/**
 * @desc
 * Magic values refer to variables that we assign values
 * to. They have some kind of meaning but can cause
 * confusion if not readable by others. We can't expect
 * people reading our code to understand it if you don't
 * write with the goal of readbility in mind
 *
 */

// #1
// if x is changed to another string we have a problem
// this won't scale
let x = "initialize";
let y = "";

for (let i = 0; i < 10; i++) {
  b += y[i].toUpperCase();
}

// this is a better approach
for (let i = 0; i < x.length; i++) {
  b += y[i].toUpperCase();
}
