const express = require("express");
const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("<h1>Started</h1>"));

//Linked List
let Node = function () {
  //List of all letter inside the folder
  this.keys = new Map();
  // Is this the end letter?
  this.end = false;
  //Setter function
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

let Trie = function () {
  this.root = new Node();

  // The initial node is the root
  this.add = function (input, node = this.root) {
    // If the input/string is 0 characters long,
    if (input.length == 0) {
      node.setEnd();
      return;
      // If the map of the currentNode does not have the first char of the input
    } else if (!node.keys.has(input[0])) {
      // Add this character to the map of the currentNode
      node.keys.set(input[0], new Node());
      // Take the next character of the string and add it to the newly created node which represents input[0]
      return this.add(input.substr(1), node.keys.get(input[0]));
      // If the map of keys contains the character, we will add the next character to the node.
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };
  // Checks if the tree contains the word
  this.isWord = function (word) {
    // Sets the node to root
    let node = this.root;
    // While the length of the word (which is being changed) is higher than 1...
    while (word.length > 1) {
      // If the node does not contain the first character of the word
      if (!node.keys.has(word[0])) {
        // Return because not branches start with that character
        return false;
        // If it is contained
      } else {
        // Change the position of the node to the node containing the first character
        node = node.keys.get(word[0]);
        // Make the word smaller by rendering all characters but the first one
        word = word.substr(1);
      }
    }
    // Once the word is 1 char long, check if the node contains that a node which represents the last character (word)
    // And check the that work has the property this.end equals to true.
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  this.print = function () {
    // Array for adding the words
    let words = new Array();

    let search = function (node, string) {
      // If the number of keys nodes in the map is more than 0, then...
      if (node.keys.size != 0) {
        // For the keys  present in keys map of the node...
        for (let letter of node.keys.keys()) {
          // Check if that node contains children nodes/keys and add the character of the letter node to the string variable.
          search(node.keys.get(letter), string.concat(letter));
        }
        // If this iteration contains this.end equals to true, meaning it is a complete word, it will push the word to the words array.
        if (node.isEnd()) {
          words.push(string);
        }
        // If the size of the keys array of the node is 0 ,meaning the ned has been reached , check if the string is greater than
        // 0, if so add it to the words array.
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : mo;
  };
};

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
