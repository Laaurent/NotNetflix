
var handlers = require('../handlers/role.handler')
module.exports = function(app, Joi, validator){
    const roleSchema = Joi.object({
        name: Joi.string().required(),
    })
    const rolesSchema = Joi.array().items(roleSchema)
    
app.post('/roles',validator.body(roleSchema),handlers.createRole)
app.patch('/roles/:id',validator.body(roleSchema),handlers.modifyRole)
app.delete('/roles/:id',handlers.deleteRole)
app.get('/roles/:id',validator.response(roleSchema),handlers.showRole)
app.get('/roles',validator.response(rolesSchema),handlers.showRoles)
}