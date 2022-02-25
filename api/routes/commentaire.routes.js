
let handlers = require('../handlers/commentaire.handler')
let AuthJwt = require('../middlewares/authJwt')
module.exports = function(app, Joi, validator){
    const comSchema = Joi.object({
        content: Joi.string().required(),
    })
    const comsSchema = Joi.array().items(comSchema)
    const queryStringCom = Joi.object({id :Joi.number().integer().required()})

//* PARAMS au lieu de QUERY car les id sont avec des params dans nos routes mais c'est la même syntaxe avec des query
app.post('/comments',[AuthJwt.verifyToken],validator.body(comSchema),handlers.createCommentaire)
app.patch('/comments/:id',[AuthJwt.verifyToken],validator.body(comSchema),validator.params(queryStringCom),handlers.modifyCommentaire)
app.delete('/comments/:id',[AuthJwt.verifyToken],validator.params(queryStringCom),handlers.deleteCommentaire)
app.get('/comments/:id',[AuthJwt.verifyToken],validator.response(comSchema),validator.params(queryStringCom),handlers.showCommentaire)
app.get('/comments',[AuthJwt.verifyToken],validator.body(comsSchema),handlers.showCommentaires)
}