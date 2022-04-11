let handlers = require("../handlers/commentaire.handler");
let AuthJwt = require("../middlewares/authJwt");
module.exports = function (app, Joi, validator) {
   const comSchema = Joi.object({
      content: Joi.string().required(),
      showId: Joi.number().integer().required(),
      seasonId: Joi.number().integer(),
      episodeId: Joi.number().integer(),
      special: Joi.number().integer(),
   });
   const paramsStringCom = Joi.object({ id: Joi.number().integer().required() });
   const queryStringCom = Joi.object({
      seasonId: Joi.number().integer(),
      episodeId: Joi.number().integer(),
   });

   const comBody = Joi.object({
      content: Joi.string().required(),
   });

   //* PARAMS au lieu de QUERY car les id sont avec des params dans nos routes mais c'est la même syntaxe avec des query
   app.post("/comments", [AuthJwt.verifyToken], validator.body(comSchema), handlers.createCommentaire);
   app.patch(
      "/comment/:id",
      [AuthJwt.verifyToken, AuthJwt.isAuthorize],
      validator.params(paramsStringCom),
      validator.body(comBody),
      handlers.modifyCommentaire
   );
   app.delete("/comment/:id", [AuthJwt.verifyToken, AuthJwt.isAuthorize], validator.params(paramsStringCom), handlers.deleteCommentaire);
   app.get("/comments/:id", [AuthJwt.verifyToken], validator.params(paramsStringCom), validator.query(queryStringCom), handlers.showCommentaires);
   // app.get('/comments',[AuthJwt.verifyToken],handlers.showCommentaires)
};
