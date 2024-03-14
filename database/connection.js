/* 
 connection.js for connect mongodb database
*/

const mongoose = require("mongoose");

class MongoDatabase {
  uri;
  clientOptions;
  connection;
  constructor() {
    this.uri = "mongodb://usrname:password@localhost:27017";
    this.clientOptions = {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    };
  }

  async connectionDatabase() {
    try {
      this.connection = await mongoose.connect(this.uri, this.clientOptions);
      this.connection = await mongoose.connection.db
        .admin()
        .command({ ping: 1 });
      console.log("Ping Success, Database has deployment");
    } catch (err) {
      console.log("Error Connection to MongoDB: ", err);
    }
  }
}

const mongoDatabase = new MongoDatabase();
module.exports = mongoDatabase;
