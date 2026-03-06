require('dotenv').config();  
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder
app.use(express.static(path.join(__dirname, "public")));


// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// routes
app.get("/", (req, res) => {
  res.render("user/index");
});

app.get("/menu", (req, res) => {
  res.render("user/menu");
});

app.get('/healthz', (req, res) => {
  res.status(200).send("OK");
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});