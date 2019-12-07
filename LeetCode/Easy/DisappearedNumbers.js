// Given an array of integers where 1 ≤ a[i] ≤ n (n = size
// of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive
// that do not appear in this array.

// Could you do it without extra space and in O(n) runtime?
// You may assume the returned list does not count as extra space.

// 1. Hash table (with extra space)
const findDisappearedNumbers = function(nums) {
  let map = {};
  let returnedArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      returnedArray.push(i);
    }
  }

  return returnedArray;
};
