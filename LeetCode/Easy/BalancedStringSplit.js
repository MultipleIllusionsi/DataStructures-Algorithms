// Balanced strings are those who have equal
// quantity of 'L' and 'R' characters.

// Given a balanced string s split it in
// the maximum amount of balanced strings.

// Return the maximum amount of
// splitted balanced strings.

// 1. Hash Table
const balancedStringSplit = function(s) {
  let count = 0;
  const countTracker = {
    R: 0,
    L: 0
  };

  s.split("").forEach(letter => {
    countTracker[letter] += 1;

    if (countTracker.R === countTracker.L) {
      count++;
      countTracker.R = 0;
      countTracker.L = 0;
    }
  });

  return count;
};

// 2. Stack
const balancedStringSplit = function(s) {
  let matches = 0;
  const stack = [];

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (top !== undefined && top !== s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (stack.length === 0) {
      matches += 1;
    }
  }

  return matches;
};

balancedStringSplit("RLRRLLRLRL");
balancedStringSplit("RLLLLRRRLR");
balancedStringSplit("LLLLRRRR");
balancedStringSplit("RLRRRLLRLL");
