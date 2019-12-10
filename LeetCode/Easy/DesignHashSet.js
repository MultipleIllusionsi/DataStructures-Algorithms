/////////// 1. Using object

const MyHashSet = function() {
  this.set = {};
};

MyHashSet.prototype.add = function(key) {
  this.set[key] = true;
};

MyHashSet.prototype.remove = function(key) {
  delete this.set[key];
};

MyHashSet.prototype.contains = function(key) {
  return this.set[key] ? this.set[key] : false;
};

///////// 2. Using array

const MyHashSet = function() {
  this.set = [];
};

MyHashSet.prototype.add = function(key) {
  this.set.push(key);
};

MyHashSet.prototype.remove = function(key) {
  if (this.contains(key)) {
    this.set = this.set.filter(elem => elem !== key);
  }
};

MyHashSet.prototype.contains = function(key) {
  return this.set.includes(key) ? true : false;
};
