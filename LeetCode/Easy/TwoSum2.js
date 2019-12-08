// Given an array of integers that is already
// sorted in ascending order, find two numbers
// such that they add up to a specific target number.

// The function twoSum should return indices
// of the two numbers such that they add up to
// the target, where index1 must be less than index2.

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9.
// Therefore index1 = 1, index2 = 2.

var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (true) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};

const twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  return [left + 1, right + 1];
};
