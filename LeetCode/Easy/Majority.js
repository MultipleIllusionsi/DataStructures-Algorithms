// Given an array of size n, find the majority element.
// The majority element is the element
// that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty
//  and the majority element always exist in the array.

// 1. brutal hash table
const majorityElement = function(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (let key in map) {
    if (map[key] > nums.length / 2) {
      return +key;
    }
  }
  return map;
};

// 2. more efficient hash table
const majorityElement = function(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }

    if (map[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }

  return map;
};
