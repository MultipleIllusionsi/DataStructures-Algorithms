// Given an array of 2n integers, your task is
// to group these integers into n pairs of integer,
// say (a1, b1), (a2, b2), ..., (an, bn) which
// makes sum of min(ai, bi) for all i from 1
// to n as large as possible.

// Input: [1,4,3,2]
// Output: 4
// Explanation: n is 2, and the maximum
// sum of pairs is 4 = min(1, 2) + min(3, 4).

// 1. Sorting
const arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length; i = i + 2) {
    sum = sum + nums[i];
  }

  return sum;
};

// 2. Built-in methods
const arrayPairSum = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((x, idx) => idx % 2 === 0)
    .reduce((a, b) => a + b);
};
