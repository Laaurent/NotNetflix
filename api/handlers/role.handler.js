const { Role } = require("../models");

exports.createRole = (req, res) => {
   // res.send('ALL Roles')
   Role.create(req.body)
      .then((response) => {
         res.send("Role created");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad Request" });
      });
};
exports.modifyRole = (req, res) => {
   // res.send('ALL Roles')
   Role.update(req.body, {
      where: {
         id: req.params.id,
      },
   })
      .then((res) => {
         res.send("Role modified");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad Request" });
      });
};
exports.showRoles = (req, res) => {
   Role.findAll({ raw: true })
      .then((response) => {
         res.send(response);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad Request" });
      });
};
