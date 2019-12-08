// Given an input string, reverse
// the string word by word.

// Input: "the sky is blue"
// Output: "blue is sky the"
// Input: "  hello world!  "
// Output: "world! hello"
// Input: "a good   example"
// Output: "example good a"

// 1. Built-in
const reverseWords = function(s) {
  return s
    .split(" ")
    .filter(el => el !== "")
    .reverse()
    .join(" ");
};

// 2. Copy to new string
const reverseWords = function(s) {
  let splitArray = s.split(" ");
  let reversedStr = "";

  for (let i = splitArray.length - 1; i >= 0; i--) {
    if (splitArray[i] !== "") {
      if (reversedStr.length > 0) {
        reversedStr += " ";
      }

      reversedStr += splitArray[i];
    }
  }

  return reversedStr;
};
