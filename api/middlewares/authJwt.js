const config = require('../config/auth.config');
const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

let verifyToken = async (req, res, next) => {
    let token = req.cookies.authCookie;

    if (!token) {
       res.status(403).send({
            message: 'Token vide',
        });
    }

    jwt.verify(token, config.secret, async (err, decoded) => {
        if (err) {
           res.status(401).send({
                message: 'Token invalid',
            });
        } else {
            try{
                let user = await models.User.findByPk(decoded.id)
                if (user) next()
                else res.status(403).send({message: 'Token corrompu'})
            }catch(e){
                console.log(e)
                res.status(404).send({
                    message: e,
                });
            }
        }
    });
};

let checkIdentity = async (req, res, next) => {
    try{

        let user = await models.User.findOne({
            where: {
                username: req.body.username,
            },
        })
        if (user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
                res.status(401).send({
                    message: 'Mot de passe inconnu',
                });
            }else{
                next()
            }
        }else{
            res.status(404).send({
                message: 'Utilisateur non trouvé',
            });
        }
    }catch(e){
        console.log(e)
        res.status(404).send({
            message: e,
        });
    }
};

let isAuthorize = async (req, res, next) => {
    let decoded = jwt.decode(req.cookies.authcookie);
    try{
        let user = await models.User.findByPk(decoded.id)
        if (user) {
            let role = await user.getRole()
            if (role.name == 'ADMIN') {
                next()
            }
        }else{

            res.status(403).send({
                message: 'Require authorize role',
            });
        }
    }catch(e){
        console.log(e)
        res.status(404).send({
            message: e,
        });
    }

};
let checkDuplicate = async (req, res, next) => {
try{

    let user = await models.User.findOne({
        where: {
            username: req.body.username,
        },
    })
    if (user) {
        res.status(400).send({
            message: 'Email already exist',
        });
    }else{
        next()
    }
}catch(e){
    console.log(e)
    res.status(404).send({
        message: e,
    });
}
}

const authjwt = {
    verifyToken: verifyToken,
    isAuthorize: isAuthorize,
    checkIdentity: checkIdentity,
    checkDuplicate: checkDuplicate
};

module.exports = authjwt;