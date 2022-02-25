const authJwt = require('../middlewares/authJwt')
const auth_handler = require('../handlers/auth.handler');
const user_handler = require('../handlers/user.handler')

module.exports = function(app,Joi,validator){
const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})
app.post('/signin',[authJwt.checkIdentity],validator.body(userSchema),auth_handler.SignIn)
app.post('/signup',[authJwt.checkDuplicate],validator.body(userSchema),user_handler.createUser)
}