const jwt = require("jsonwebtoken");
const config = require("./config");

const getToken = () => {
  const payload = { loggedIn: true };
  const token = jwt.sign(payload, config.secret, {
    expiresIn: config.expiresIn, // 1 Week
  });
  return token;
};

const getPayload = (token) => {
  try {
    const payload = jwt.verify(token, config.secret);
    if (payload.exp < Date.now() / 1000 || !payload.loggedIn) {
      return { loggedIn: false };
    }
    return { loggedIn: true };
  } catch (err) {
    // Add Err Message
    return { loggedIn: false };
  }
};

module.exports = {
  getToken,
  getPayload,
};
