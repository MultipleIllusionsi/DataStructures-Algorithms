// Given a non-empty array of integers, every element
// appears twice except for one. Find that single one.

// 1. Hash Tables
const singleNumber = function(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    } else {
      map[nums[i]] = false;
    }
  }

  for (let key in map) {
    if (map[key] === true) {
      return key;
    }
  }
  return "not found";
};

// 2. Sets from JS
const singleNumber = function(nums) {
  let set = new Set();

  for (num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return Array.from(set)[0];
};
