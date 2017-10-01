const axios = require('axios');
const config = require('../config.js')

module.exports = {


  //this gets cat pictures from unSplash.....
      // this.data = function() {
      //     var rando = (Math.floor(Math.random() * 10));
      //     var otherRando = (Math.floor(Math.random() * 19) + 1);
      //  SEE CONFIG FILE
      //     .then(function(results) {
      //       var catPics = results.data.results[rando].urls.small;
      //       // console.log(catPics)
      //       return catPics;
      //     })
      //   }

    getCatPictures: function(req, res, next) {

      },

      getHumanPictures: function(req, res, next) {
        axios.get('https://randomuser.me/api/')
            .then(response => {
              res.status(200).json(response.data.results[0])
            })
            .catch(err => {
              return err;
            });
        }

}
