const express = require("express");
const app = express();
const httpPort = process.env.PORT || 3000;
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(httpPort, "0.0.0.0", () => {
  console.log(`Server running on port ${httpPort}`);
});