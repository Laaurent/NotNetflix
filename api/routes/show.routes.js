const authJwt = require("../middlewares/authJwt");
const serie_handler = require("../handlers/show.handler");

module.exports = function (app) {
   app.get("/shows", authJwt.verifyToken, serie_handler.index);
   app.get("/shows/:id", authJwt.verifyToken, serie_handler.read);
   app.get("/shows/:id/episodes", authJwt.verifyToken, serie_handler.read_episodes);
};
