const express = require("express");
const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("<h1>Started</h1>"));

// sets
//Doest allow the addition of duplicates
function mySet() {
  //the var collection will gold the set
  let collection = [];
  //this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  // This method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // This method will add and elemt to teh set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // This method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //this method will return the size o the collection
  this.size = function () {
    return collection.length;
  };

  //this method will return the union of two sets and leave out any duplicates
  this.union = function (otherSet) {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // This method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    var differenceSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // This method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setA.add("b");
setA.add("c");
setA.add("a");
setA.add("d");
setB.add("f");
setB.add("c");
setB.add("a");
setB.add("d");
// console.log(setA.subset(setB));
console.log(setA.difference(setB).values());

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
