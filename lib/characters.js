var request  = require('request'),
    Promise = require('bluebird');

module.exports = function(credentials) {
  var public_key  = credentials.pubKey,
      private_key = credentials.privKey,
      characters  = {};

    characters.findAll = function() {
      request({
        url:"http://gateway.marvel.com/v1/public/characters",
        json:true,
        qs:{
          apikey:public_key
        }
      }, function(err, response){
        if (err) {
          return Promise.reject(err);
        }
        if (response.statusCode !== 200) {
          return Promise.reject(new Error(response.body));
        }

        Promise.resolve(response.body);

      });
    },
    characters.findByName = function() {

    },
    characters.find = function() {

    };

    return characters;
};
