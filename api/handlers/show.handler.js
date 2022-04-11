const axios = require("axios");

/**
 *  Return all the specified ressources
 * @param {*} req
 * @param {*} res
 */
exports.index = async (req, res) => {
   try {
      let result = await axios.get(`https://api.tvmaze.com/shows`);
      res.status(200).json(result.data);
   } catch (err) {
      res.status(err.response.status).json({
         status: err.response.status,
         message: err.message,
      });
   }
};

/**
 *  return the specified ressource
 * @param {*} req
 * @param {*} res
 */
exports.read = async (req, res) => {
   try {
      let result = await axios.get(`https://api.tvmaze.com/shows/${req.params.id}`);
      res.status(200).json(result.data);
   } catch (err) {
      res.status(err.response.status).json({
         status: err.response.status,
         message: err.message,
      });
   }
};

/**
 *  return the specified ressource episodes
 * @param {*} req
 * @param {*} res
 */
exports.read_episodes = async (req, res) => {
   try {
      let result = await axios.get(`https://api.tvmaze.com/shows/${req.params.id}/episodes`);
      res.status(200).json(result.data);
   } catch (err) {
      res.status(err.response.status).json({
         status: err.response.status,
         message: err.message,
      });
   }
};
