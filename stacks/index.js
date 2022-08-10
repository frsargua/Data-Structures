const express = require("express");
const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("<h1>Started</h1>"));

// Stacks
//A stack contains: push, pop, peek, length functions

//Basic functionality of stack
let letters = [];

let word = "racecar";
var reverseWord = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
for (let i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}
if (reverseWord === word) console.log(word + " is a palindrome");
else console.log(word + "  is not a palindrome");

//Stack object
let Stack = function () {
  this.count = 0;
  this.storage = [];

  //   Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count == 0) {
      return undefined;
    }

    this.count--;
    let results = this.storage[this.count];
    delete this.storage[this.count];
    return results;
  };

  this.size = function () {
    return this.count;
  };

  //   Retuns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
