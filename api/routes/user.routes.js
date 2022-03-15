const { createUser, updateUser, deleteUser, getOneUser, getManyUsers } = require('../handlers/user.handler')

module.exports = function(app,Joi, validator){
const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})
const usersSchema = Joi.array().items(userSchema)
app.post('/users',validator.body(userSchema),createUser)
app.patch('/users/:id',validator.body(userSchema),updateUser)
app.delete('/users/:id',deleteUser)
app.get('/users/:id',validator.response(userSchema),getOneUser)
app.get('/users',validator.response(usersSchema),getManyUsers)
}