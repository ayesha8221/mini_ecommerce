const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const con = require('./backend/config/db')

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8080"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello Ms Gee" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});