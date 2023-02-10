/**
 * @desc
 * Magic values refer to variables that we assign values
 * to. They have some kind of meaning but can cause
 * confusion if not readable by others. We can't expect
 * people reading our code to understand it if we don't
 * write with the goal of readbility in mind
 *
 */

// #1
// If x is changed to another string we have a problem
// and this won't scale
let x = "initialize";
let y = "";

for (let i = 0; i < 10; i++) {
  b += y[i].toUpperCase();
}

// This is a better approach
for (let i = 0; i < x.length; i++) {
  b += y[i].toUpperCase();
}

// #2
// Intent and readability with primitives or other data types
// We're not helping anyone without some kind of explanation
let totalCost = orders.getAll() * 1.44;

// This is a better approach
const GLOBAL_TAX_RATE = 1.44;
let totalCost = orders.getAll() * GLOBAL_TAX_RATE;
