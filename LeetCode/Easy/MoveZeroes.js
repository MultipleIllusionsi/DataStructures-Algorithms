// Given an array nums, write a function to
// move all 0's to the end of it while maintaining
// the relative order of the non-zero elements.

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// 1. Brutal way
const moveZeroes = function(nums) {
  let length = nums.length;
  let map = {};
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      map[i] = true;
      nums.push(0);
    }
  }

  for (let key in map) {
    nums.splice(+key - count, 1);
    count++;
  }

  return nums;
};

// 2. Less code
const moveZeroes = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[count++] = nums[i];
    }
  }

  while (count < nums.length) {
    nums[count++] = 0;
  }

  return nums;
};
