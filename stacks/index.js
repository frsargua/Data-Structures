const express = require("express");
const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("<h1>Started</h1>"));

// Stacks

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
