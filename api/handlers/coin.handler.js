const axios = require("axios");

/**
 *  Return all the specified ressources
 * @param {*} req
 * @param {*} res
 */
exports.index = async (req, res) => {
   try {
      let result = await axios.get(`http://api.coincap.io/v2/assets`);
      res.status(200).json(result.data.data);
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
      let result = await axios.get(`http://api.coincap.io/v2/assets/${req.params.name}`);
      res.status(200).json(result.data.data);
   } catch (err) {
      res.status(err.response.status).json({
         status: err.response.status,
         message: err.message,
      });
   }
};
