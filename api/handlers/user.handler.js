const { User, Role } = require("../models");
let bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
   const { email, password } = req.body;

   const user = await User.create({
      email,
      password: bcrypt.hashSync(password, 8),
   });
   if (user) {
      let role = await user.setRole(
         await Role.findOne({
            where: { name: req.body.role ? req.body.role : "USER" },
         })
      );
      if (role) {
         res.status(200).send("User created");
      } else res.status(400).send("User not created");
   } else res.status(400).send("User not created");
};

const updateUser = async (req, res) => {
   const updateSuccess = await User.update(
      {
         ...req.body,
      },
      {
         where: {
            id: req.params.id,
         },
      }
   );

   if (updateSuccess) {
      const user = await User.findByPk(req.params.id);
      if (user) {
         res.status(200).send({ message: "User updated" });
      } else {
         res.status(400).send({ message: "User not updated" });
      }
   } else {
      res.status(500).json({
         status: 500,
         message: "Server error",
      });
   }
};

const deleteUser = async (req, res) => {
   try {
      let result = await User.destroy({
         where: {
            id: req.params.id,
         },
      });
      res.status(204).send({ message: "User deleted" });
   } catch (err) {
      res.status(500).json({
         status: 500,
         message: "Server error",
      });
   }
};

const getOneUser = async (req, res) => {
   let user = null;

   if (req.query.displayPosts) {
      user = await User.findByPk(req.params.id, {
         raw: true,
         include: {
            model: Post,
         },
      });
   } else {
      user = await User.findByPk(req.params.id, { raw: true });
   }
   if (!user) {
      res.status(404).json({
         status: 404,
         message: "Resource not found",
      });
   } else {
      res.json(user);
   }
};

const getManyUsers = async (req, res) => {
   const users = await User.findAll({ raw: true });
   res.json(users);
};

module.exports = {
   createUser,
   updateUser,
   deleteUser,
   getOneUser,
   getManyUsers,
};
