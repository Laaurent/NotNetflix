const { User, Role } = require('../models');
const config = require('../config/auth.config');
let jwt = require('jsonwebtoken')

const SignIn = async(req, res) => {
try{
    let user = await User.findOne({
        where: {
            username: req.body.username,
        },
    })
    if (user) {
        let role = user.getRole()
        console.log(user)
        let token = jwt.sign({ id: user.id, role: role.name }, config.secret, {
            expiresIn: 86400000,
        });
        res.cookie('authCookie', token, { maxAge: 86400000 });
        res.status(200).send({
            id: user.id,
            username: user.username,
            accessToken: token,
        });
    }
}catch(e){
    console.log('ERREUR',e)
    res.status(400)
}
    
};

module.exports = {
    SignIn
  }