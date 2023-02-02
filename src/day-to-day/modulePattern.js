/***
 * @desc
 * the classic version of module uses an IIFE to expose variable or functions
 *
 * @param none, however you can add inputs
 * @returns {Object}
 */

const myModule = (function () {
  let name = "Marcus Aurelius";
  const title = "Stoic Roman Emperor";

  function getPerson() {
    console.log(`${name} ${title}`)
  }

  function setName(newName) {
    name = newName;
  }

  return {
    setName,
    getPerson,
    name,
    title
  };
})();
