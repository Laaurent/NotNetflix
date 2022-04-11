const {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getManyUsers,
} = require("../handlers/user.handler");
let AuthJwt = require("../middlewares/authJwt");
module.exports = function (app, Joi, validator) {
  const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  const usersSchema = Joi.array().items(userSchema);
  const paramsStringCom = Joi.object({ id: Joi.number().integer().required() });
  app.patch(
    "/users/:id",
    [AuthJwt.verifyToken, AuthJwt.isAuthorize],
    validator.params(paramsStringCom),
    validator.body(userSchema),
    updateUser
  );
  app.delete(
    "/users/:id",
    [AuthJwt.verifyToken, AuthJwt.isAuthorize],
    validator.params(paramsStringCom),
    deleteUser
  );
  app.get(
    "/users/:id",
    [AuthJwt.verifyToken, AuthJwt.isAuthorize],
    validator.params(paramsStringCom),
    getOneUser
  );
  app.get("/users", [AuthJwt.verifyToken, AuthJwt.isAuthorize], getManyUsers);
};
