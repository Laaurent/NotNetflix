const {Commentaire, User} = require("../models")
const jwt = require('jsonwebtoken');

exports.createCommentaire = async(req,res) => {
    const {content} = req.body.content
    const decodedId = jwt.decode(req.cookies.authCookie)

    try{
        const user = User.findByPk(decodedId);
        if (condition) {
            const commentaire = await Commentaire.create(content)
            if (commentaire) {
                let author = await commentaire.setUser(user)
                if (author) {
                    res.status(200).send('Comment ceated')
                }
            }else{
                res.status(400).send('Comment not created')
            }
        }
    }
    catch(e){
        console.log(e)
    }
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


