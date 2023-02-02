/**
 * @desc
 * proxyEnum uses a proxy that wraps an object to prevent modification or extension
 * we've seen the use in our `enum` function, but this approach make's it possible
 * to extend and throw errors, etc
 *
 * @thanks Proxy Use Case, Mozilla Hacks
 */
export const NOPE = () => {
  throw new Error("Can't modify read-only view");
};

export const NOPE_HANDLER = {
  set: NOPE,
  defineProperty: NOPE,
  deleteProperty: NOPE,
  preventExtensions: NOPE,
  setPrototypeOf: NOPE,
  // ... more traps
};

const readOnlyView = (target) => new Proxy(target, NOPE_HANDLER);

const createProxyEnum = (target) =>
  readOnlyView(
    new Proxy(target, {
      get: (obj, prop) => {
        if (prop in obj) {
          return Reflect.get(obj, prop);
        }
        throw new ReferenceError(`Unknown prop "${prop}"`);
      },
    })
  );

export default createProxyEnum;

/*
let SHIRT_SIZES = createProxyEnum({
  S: 10,
  M: 15,
  L: 20
})

SHIRT_SIZES.S // 10
SHIRT_SIZES.S = 15

// Uncaught Error: Can't modify read-only view

SHIRT_SIZES.XL
*/
