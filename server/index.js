const express = require("express");

const cors = require("cors");
const app = express();
const url = "/api/test";
const port = 5000;
const message = "test ok";

app.use(cors());
app.use(express.json());

app.get(url, (req, res) => {
  res.json(message);
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});
  
// Static Port
app.listen(port);
console.log(`App listening on port http://localhost:${port}${url}`);

// // Dynamic Port
// const server = app.listen(0, () => {
//   const port = server.address().port;
//   console.log(`App listening on port http://localhost:${port}${url}`);
// });

// Note: to run the program run nodemon index.js
