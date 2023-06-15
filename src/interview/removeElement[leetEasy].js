/*
 Problem
 =======

 Remove Element
 --------------

 Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 The order of elements can be changed. It doesn't matter what you leave beyond the new length.

 Example # 1
 ===========
 Given nums = [3,2,2,3], val = 3,
 Your function should return length = 2, with the first two elements of nums being 2.

 It doesn't matter what you leave beyond the returned length.

 Difficult Level: Easy
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  var len = nums.length;
  var count = 0;

  for (var i = 0; i < len; i++) {
    if (nums[i] !== val) nums[count++] = nums[i];
  }

  return count;
};

//removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

// By far the simplest answer but not LeetCode acceptable
function removeElementByFilter(nums, val) {
  nums = nums.filter((num) => num !== val);
  return nums.length;
}
