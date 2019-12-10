// 1. Naive Brute (O n^2)
const containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] === nums[i]) return true;
    }
  }
  return false;
};

// 2. Sorting
const containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) return true;
  }
  return false;
};

// 3. Hash table
const containsDuplicate = function(nums) {
  let map = {};

  for (let value of nums) {
    if (!map[value]) {
      map[value] = true;
    } else {
      return true;
    }
  }
  return false;
};
