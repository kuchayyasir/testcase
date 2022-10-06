const { getPayload } = require("../util");
const auth = (req, res, next) => {
  const bearerHeader = req.headers.authorization || "";
  const token = bearerHeader.replace("Bearer ", "");
  if (!token) return res.status(401).send("Access denied. No token provided");
  try {
    const payload = getPayload(token);
    if (payload.loggedIn) next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
module.exports = auth;
