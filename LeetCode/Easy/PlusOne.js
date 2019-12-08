// Given a non-empty array of digits representing
//  a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant
// digit is at the head of the list, and each element
// in the array contain a single digit.

// You may assume the integer does not contain any
// leading zero, except the number 0 itself.

const plusOne = function(digits) {
  let i = digits.length - 1;
  digits[i]++;

  while (digits[i] > 9) {
    digits[i] = 0;
    if (i > 0) {
      digits[i - 1]++;
      i--;
    } else {
      digits.unshift(1);
      break;
    }
  }

  return digits;
};
