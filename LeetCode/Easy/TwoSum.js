// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one
// solution, and you may not use the same element twice.

// 1. Brute Force w/ nested loops | TC O(N^2) | SC O(1)

const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 2. Hash Table w/ memoization
// makes property (key is DIFFERENCE, value is index), then looking for this difference
const twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
  }
};
