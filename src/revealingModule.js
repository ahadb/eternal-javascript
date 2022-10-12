/***
 * @desc
 * the classic version of revealingModule uses a IIFE to create a closure around
 * variables we want to encapsulate within our module and variables we want to expose.
 *
 * @param none, however you can add inputs
 * @returns {Object}
 */

const revealingModule = (function () {
  let privateMember = "Marcus Aurelius";
  const publicMember = "Stoic Roman Emperor";

  function privateFn() {
    console.log(`Name: ${privateMember}`);
  }

  function publicSetName(name) {
    privateMember = name;
  }

  function publicGetName() {
    privateFn();
  }

  return {
    setName: publicSetName,
    getName: publicGetName,
    name: publicMember,
  };
})();
