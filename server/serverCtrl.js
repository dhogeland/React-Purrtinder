const axios = require('axios');
const config = require('../config.js')

module.exports = {

  getCatPictures: function(req, res, next) {
    const randomNumber1 = (Math.floor(Math.random() * 19) + 1);
    const randomNumber2 = (Math.floor(Math.random() * 10));
    axios.get(config.apiFirstPart + randomNumber1 + config.apiSecondPart)
      .then(response => {
        res.status(200).json(response.data.results[randomNumber2])
      })
      .catch(err => {
        console.log(err.response)
        return err;
    });
  }
}
