const models = require('../models');

let checkDuplicate = (req, res, next) => {
    models.User.findOne({
        where: {
            username: req.body.username,
        },
    }).then((user) => {
        if (user) {
            res.status(400).send({
                message: 'Email already exist',
            });
        }
        next()
    }).catch((err) => {
        res.status(400).send({message: "Bad Request"})
    })
}

const verifySignUp = {
    checkDuplicate: checkDuplicate,
};

module.exports = verifySignUp;