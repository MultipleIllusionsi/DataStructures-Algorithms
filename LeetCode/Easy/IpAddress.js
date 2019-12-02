// Given a valid (IPv4) IP address, return
// a defanged version of that IP address.

// A defanged IP address replaces
// every period "." with "[.]".

// 1. Simple way w/ transform to array
const defangIPaddr = function(address) {
  const addressToArray = address.split("");
  const newArray = [];

  addressToArray.forEach(item => {
    if (item === ".") {
      newArray.push("[.]");
    } else {
      newArray.push(item);
    }
  });
  return newArray.join("");
};

// 2. Regex (str.replace())
