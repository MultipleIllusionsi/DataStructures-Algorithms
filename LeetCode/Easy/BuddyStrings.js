// Given two strings A and B of lowercase letters,
// return true if and only if we can swap
// two letters in A so that the result equals B.

const buddyStrings = function(A, B) {
  let swapIdx = [];

  if (A.length !== B.length) {
    return false;
  }

  if (A === B) {
    return A.length > new Set(A).size;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      swapIdx.push(i);
    }
  }

  if (swapIdx.length === 2) {
    let swappedA = A.split("");
    swappedA[swapIdx[0]] = A[swapIdx[1]];
    swappedA[swapIdx[1]] = A[swapIdx[0]];
    return swappedA.join("") === B;
  } else {
    return false;
  }
};
