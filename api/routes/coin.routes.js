const authJwt = require("../middlewares/authJwt");
const coin_handler = require("../handlers/coin.handler");

module.exports = function (app) {
   app.get("/coins", coin_handler.index);
   app.get("/coins/:name", authJwt.verifyToken, coin_handler.read);
};
