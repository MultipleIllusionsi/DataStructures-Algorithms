// You're given strings J representing the types of stones
// that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters
// in J and S are letters. Letters are case sensitive,
// so "a" is considered a different type of stone from "A".

// 1. Hash Table
const numJewelsInStones = function(J, S) {
  let jewels = {};
  let count = 0;

  for (let j = 0; j < J.length; j++) {
    if (!jewels[J[j]]) {
      jewels[J[j]] = true;
    }
  }

  for (let s = 0; s < S.length; s++) {
    if (jewels[S[s]]) {
      count++;
    }
  }

  return count;
};

// 2. Built-in JS functions
const numJewelsInStones = function(J, S) {
  return S.split("").filter(c => J.includes(c)).length;
};

// 3. Set
const numJewelsInStones = function(J, S) {
  const jewels = new Set(J);
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (jewels.has(S.charAt(i))) {
      count++;
    }
  }

  return count;
};
