const { Comment, User } = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

exports.createCommentaire = async (req, res) => {
  const { content, showId, seasonId, episodeId, special } = req.body;
  const decoded = jwt.decode(req.cookies.authCookie);

  try {
    const user = await User.findByPk(decoded.id);

    const commentaire = await Comment.create({
      content,
      showId,
      seasonId,
      episodeId,
      special,
    });
    if (commentaire) {
      let author = await commentaire.setUser(user);
      if (author) {
        res.status(200).send("Comment ceated");
      }
    } else {
      res.status(400).send({ message: "Comment not created" });
    }
  } catch (err) {
    res.status(404).send({ message: "User doesn't exist" });
  }
};
exports.modifyCommentaire = async (req, res) => {
  // res.send('ALL Commentaires')
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((res) => {
      res.send("Commentaire modified");
    })
    .catch((err) => {
      res.status(400).send({ message: "Comment not modified" });
    });
};
exports.deleteCommentaire = async (req, res) => {
  await Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((res) => {
      res.send("Commentaire deleted");
    })
    .catch((err) => {
      res.status(400).send({ message: "Comment not deleted" });
    });
};
exports.showCommentaire = async (req, res) => {
  // res.send('ALL Commentaires')
  let { season, episode } = req.query;
  Comment.findOne({
    where: {
      id: req.params.id,
      seasonId: season,
      episodeId: episode,
    },
  })
    .then((res) => {
      res.send("Show Commentaire");
    })
    .catch((err) => {
      res.status(400).send({ message: "Comment not shown" });
    });
};
exports.showCommentaires = async (req, res) => {
  const query = req.query;
  try {
    const commentaire = await Comment.findAll({
      where: {
        showId: req.params.id,
        [Op.and]: [
          {
            ...query,
          },
        ],
      },
      include: [{ model: User, attributes: ["id"] }],
    });
    res.status(200).json(commentaire);
  } catch (e) {
    res.status(400).send({ message: "Comments not shown" });
  }
};
