const { User } = require('../models');

const createUser = async (req, res) => {
  console.log(req.body)

  const { username, password } = req.body;
  const user = await User.create({
    username,
    password
  });

  return res.json(user);
}

const updateUser = async (req, res) => {

  const updateSuccess = await User.update({
    ...req.body
  }, {
    where: {
      id: req.params.id
    }
  });

  if(updateSuccess) {

    const user = await User.findByPk(req.params.id);
    return res.json(user);

  } else {
    res
    .status(500)
    .json({
      status: 500,
      message: 'Server error',
    });
  }

}

const deleteUser = async (req, res) => {

  const deleteSuccess = await User.destroy({
    where: {
      id: req.params.id
    }
  });

  if(deleteSuccess) {

    return res.status(204).json();

  } else {
    res
    .status(500)
    .json({
      status: 500,
      message: 'Server error',
    });
  }

}

const getOneUser = async (req, res) => {
  let user = null;

  if(req.query.displayPosts) {
    user = await User.findByPk(req.params.id, {
      include: {
        model: Post
      }
    });
  } else {
    user = await User.findByPk(req.params.id);
  }

  if(!user) {
    return res.status(404).json({
      status: 404,
      message: 'Resource not found',
    })
  }

  return res.json(user);
}

const getManyUsers = async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getManyUsers,
}