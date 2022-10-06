const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  database: process.env.DB_URI,
  secret: process.env.SECRET,
  expiresIn: parseInt(process.env.EXPIRESIN || 604800, 10),
  port: parseInt(process.env.PORT || 4000, 10),
};
