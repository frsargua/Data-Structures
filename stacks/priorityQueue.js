const express = require("express");
const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("<h1>Started</h1>"));

//Queues

function PriorityQueue() {
  collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          console.log("inside");
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
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

var pq = new PriorityQueue();
pq.enqueue(["A", 2]);
pq.enqueue(["B", 3]);
pq.enqueue(["C", 1]);
pq.enqueue(["C", 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
