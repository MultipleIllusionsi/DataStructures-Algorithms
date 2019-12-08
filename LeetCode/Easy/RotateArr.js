// Given an array, rotate the array to the
//  right by k steps, where k is non-negative.

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// 1. Two Pointers
const rotate = function(nums, k) {
  let temp = null;
  let previous = null;

  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1];

    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }

  return nums;
};

// 2. Copy Array
const rotate = function(nums, k) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    newArr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArr[i];
  }

  return nums;
};
