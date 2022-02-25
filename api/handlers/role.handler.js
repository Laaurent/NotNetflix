const {Role} = require("../models")

exports.createRole = async(req,res) => {
    // res.send('ALL Roles')
    const role = await Role.create(req.body)
    .then((response)=>{
        res.send('Role created')
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).send({message: "Bad Request"})
    })
}
exports.modifyRole = async(req,res) => {
    // res.send('ALL Roles')
    const role = await Role.update(req.body,{where:{
        id: req.params.id
    }})
    .then((res)=>{
        res.send('Role modified')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.deleteRole = async(req,res) => {
    // res.send('ALL Roles')
    const role = await Role.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((res)=>{
        res.send('Role deleted')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showRole = async(req,res) => {
    // res.send('ALL Roles')
    const role = await Role.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((res)=>{
        res.send('Show Role')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showRoles = async(req,res) => {
    // res.send('ALL Roles')
    const role = await Role.findAll()
    .then((res)=>{
        res.send('Show All')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}


