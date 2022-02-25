const {Commentaire} = require("../models")

exports.createCommentaire = async(req,res) => {
    // res.send('ALL Commentaires')
    const commentaire = await Commentaire.create(req.body)
    .then((res)=>{
        res.send('Commentaire created')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.modifyCommentaire = async(req,res) => {
    // res.send('ALL Commentaires')
    const commentaire = await Commentaire.update(req.body,{where:{
        id: req.params.id
    }})
    .then((res)=>{
        res.send('Commentaire modified')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.deleteCommentaire = async(req,res) => {
    // res.send('ALL Commentaires')
    const commentaire = await Commentaire.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((res)=>{
        res.send('Commentaire deleted')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showCommentaire = async(req,res) => {
    // res.send('ALL Commentaires')
    const commentaire = await Commentaire.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((res)=>{
        res.send('Show Commentaire')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showCommentaires = async(req,res) => {
    // res.send('ALL Commentaires')
    const commentaire = await Commentaire.findAll()
    .then((res)=>{
        res.send('Show All')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}


