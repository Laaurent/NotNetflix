const { User, Role } = require("../models");
const config = require("../config/auth.config");
let jwt = require("jsonwebtoken");

const SignIn = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    let role = user.getRole();
    let token = jwt.sign({ id: user.id, role: role.name }, config.secret, {
      expiresIn: 86400000,
    });
    res.cookie("authCookie", token, { maxAge: 86400000 });
    res.status(200).send({
      id: user.id,
      email: user.email,
      accessToken: token,
    });
  } catch (e) {
    res.status(404).send({ message: "User not found" });
  }
};

module.exports = {
  SignIn,
};
