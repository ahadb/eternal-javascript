function createDynamicArray(arrLen, maxRanNum) {
  return Array.from(
    { length: arrLen },
    () => Math.floor(Math.random() * maxRanNum) + 1
  );
}

export { createDynamicArray };
