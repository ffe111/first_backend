const express = require("express");
const app = express();
const port = 5000;

const database = require("./database/connection");
database.connectionDatabase();

const UserController = require("./user/controller");

app.use(express.json());
app.use("/user", UserController);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
