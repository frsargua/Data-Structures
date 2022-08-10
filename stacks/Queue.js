const express = require("express");
const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("<h1>Started</h1>"));

//Queues

function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
