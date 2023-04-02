const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/movie", async (req, res) => {
  const response = await axios.get(
    "https://www.omdbapi.com/?i=tt3896198&apikey=166048d2"
  );
  res.send(response.data);
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
