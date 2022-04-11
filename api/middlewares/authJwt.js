const config = require("../config/auth.config");
const { User, Role } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let verifyToken = async (req, res, next) => {
  let token = req.cookies.authCookie;

  if (!token) {
    res.status(403).send({ message: "Token vide" });
  } else {
    jwt.verify(token, config.secret, async (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: "Token invalid",
        });
      } else {
        try {
          let user = await User.findByPk(decoded.id);
          if (user) next();
          else res.status(403).send({ message: "Token corrompu" });
        } catch (e) {
          res.status(404).send({
            message: e,
          });
        }
      }
    });
  }
};

let checkIdentity = async (req, res, next) => {
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        res.status(401).send({
          message: "Mot de passe inconnu",
        });
      } else {
        next();
      }
    } else {
      res.status(404).send({
        message: "Utilisateur non trouvé",
      });
    }
  } catch (e) {
    res.status(404).send({
      message: e,
    });
  }
};

let isAuthorize = async (req, res, next) => {
  let decoded = jwt.decode(req.cookies.authCookie);
  try {
    let user = await User.findByPk(decoded.id);
    if (user) {
      //   Le get de l'instance ne fonctionne pas pour le moment, pour aucune raison je ne sais pas pourquoi
      //   let role = await user.getRole();
      let role = await Role.findByPk(user.roleId);
      if (role.name === "ADMIN") {
        next();
      } else {
        res.status(403).send({
          message: "Accès refusé",
        });
      }
    } else {
      res.status(403).send({
        message: "Require authorize role",
      });
    }
  } catch (e) {
    res.status(404).send({
      message: e,
    });
  }
};
let checkDuplicate = async (req, res, next) => {
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      res.status(400).send({
        message: "Email already exist",
      });
    } else {
      next();
    }
  } catch (e) {
    res.status(404).send({
      message: e,
    });
  }
};

const authjwt = {
  verifyToken: verifyToken,
  isAuthorize: isAuthorize,
  checkIdentity: checkIdentity,
  checkDuplicate: checkDuplicate,
};

module.exports = authjwt;
