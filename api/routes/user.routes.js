const { createUser, updateUser, deleteUser, getOneUser, getManyUsers } = require("../handlers/user.handler");
let AuthJwt = require("../middlewares/authJwt");
module.exports = function (app, Joi, validator) {
   const userSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
   });

   const userResponseSchema = Joi.object({
      id: Joi.number().integer().optional(),
      email: Joi.string().email().optional(),
      password: Joi.string().optional(),
      createdAt: Joi.date().optional(),
      updatedAt: Joi.date().optional(),
      roleId: Joi.number().integer().optional(),
      status: Joi.number().integer().optional(),
      message: Joi.string().optional(),
   });
   const usersResponse = Joi.array().items(userResponseSchema);
   const paramsStringCom = Joi.object({ id: Joi.number().integer().required() });

   app.patch("/users/:id", [AuthJwt.verifyToken, AuthJwt.isAuthorize], validator.params(paramsStringCom), validator.body(userSchema), updateUser);
   //app.delete("/users/:id", [AuthJwt.verifyToken, AuthJwt.isAuthorize], validator.params(paramsStringCom), deleteUser);
   app.get("/users/:id", [AuthJwt.verifyToken, AuthJwt.isAuthorize], validator.params(paramsStringCom), validator.response(userResponseSchema), getOneUser);
   app.get("/users", [AuthJwt.verifyToken, AuthJwt.isAuthorize], validator.response(usersResponse), getManyUsers);
};
