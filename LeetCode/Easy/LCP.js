// Write a function to find the longest common
//  prefix string amongst an array of strings.

// If there is no common prefix, return
// an empty string "".
// Input: ["flower","flow","flight"]
// Output: "fl"

// 1. Horizontal scanning
const longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }

  return prefix;
};

// 2. Vertical Scanning
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0].charAt(i);

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== c) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};

// 3. Divide and Conquer
const longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";

  return find(strs, 0, strs.length - 1);
};

function find(array, left, right) {
  if (left == right) {
    return array[left];
  } else {
    let mid = Math.floor((left + right) / 2);
    let lcpLeft = find(array, left, mid);
    let lcpRight = find(array, mid + 1, right);

    return commonPrefix(lcpLeft, lcpRight);
  }
}

function commonPrefix(left, right) {
  let min = Math.min(left.length, right.length);

  for (let i = 0; i < min; i++) {
    if (left.charAt(i) !== right.charAt(i)) return left.substring(0, i);
  }

  return left.substring(0, min);
}
