// Balanced strings are those who have equal
// quantity of 'L' and 'R' characters.

// Given a balanced string s split it in
// the maximum amount of balanced strings.

// Return the maximum amount of
// splitted balanced strings.

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

balancedStringSplit("RLRRLLRLRL");
balancedStringSplit("RLLLLRRRLR");
balancedStringSplit("LLLLRRRR");
balancedStringSplit("RLRRRLLRLL");
