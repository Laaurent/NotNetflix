let AuthJwt = require("../middlewares/authJwt");
let handlers = require("../handlers/role.handler");
module.exports = function (app, Joi, validator) {
  const roleSchema = Joi.object({
    name: Joi.string().required(),
  });
  const rolesSchema = Joi.array().items(roleSchema);
  const paramsStringCom = Joi.object({ id: Joi.number().integer().required() });

  app.post(
    "/roles",
    [AuthJwt.verifyToken, AuthJwt.isAuthorize],
    validator.body(roleSchema),
    handlers.createRole
  );
  app.patch(
    "/roles/:id",
    [AuthJwt.verifyToken, AuthJwt.isAuthorize],
    validator.body(roleSchema),
    validator.params(paramsStringCom),
    handlers.modifyRole
  );
  app.get(
    "/roles",
    [AuthJwt.verifyToken, AuthJwt.isAuthorize],
    handlers.showRoles
  );
};
