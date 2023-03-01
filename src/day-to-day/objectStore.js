/**
 * @desc
 * Add items with an a key and nested field to an object
 * Useful as an in memory data structure
 *
 */

const store = {};

// generate random str for id
function generateRandomStr(strLen) {
  return Math.random().toString(20).substr(2, strLen);
}

// adds an iten to store by key
function addToObject() {
  const contentId = generateRandomStr(4);
  const key = generateRandomStr(4);
  const objContents = store[contentId] || [];
  const content = (Math.random() + 1).toString(36).substring(7);

  objContents.push({ id: contentId, content });

  store[key] = objContents;
}

// updates object at given key
function updateObject(id, content) {
  if (Array.isArray(content)) {
    store[id] = content;
  } else {
    throw new Error("content must be an array");
  }
}

export { addToObject, updateObject };
