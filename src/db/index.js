const mongoose = require("mongoose");
const config = require("../config");
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION EVENTS
mongoose.connection.on("connected", function () {
  console.log(
    `Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`
  );
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});
