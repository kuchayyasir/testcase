const express = require("express");
const router = express.Router();
const {
  index,
  show,
  store,
  put,
  destroy,
  generateToken,
} = require("../controllers");
const auth = require("../middlewares");
//module.exports = function (app) {
router.get("/activity", [auth], index);
router.get("/generateToken", generateToken);
router.post("/activity", [auth], store);
router.get("/activity/:id", [auth], show);
router.put("/activity/:id", [auth], put);
router.delete("/activity/:id", [auth], destroy);


//};
module.exports = router;
