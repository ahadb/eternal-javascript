/***
 * @desc
 * vanillaUseState is a contrived example of a function that maintains
 * state and returns a new state
 *
 * @param {*}
 * @returns {*[]}
 */
function useState(initialState) {
  let value = initialState;
  function getValue() {
    return value;
  }
  function setValue(newState) {
    value = newState;
  }
  return [getValue, setValue];
}

export default useState;
