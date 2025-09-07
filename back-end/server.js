const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const server = express();
const PORT = process.env.PORT || 3000;


server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
