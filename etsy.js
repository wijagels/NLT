var exports = module.exports = {};
var keys = require('./keys.js');
var utils = require('./utils.js');
var request = require('request');
var prompt = require('prompt');

exports.parseCommand = function(words) {
    var query = words.slice(1, words.length).toString().replace(',', ' ');
    switch (words[0].toLowerCase()) {
        case "trending":
            request.get('https://openapi.etsy.com/v2/listings/trending?limit=25&api_key=' + keys.ETSY_KEY, {}, function(error, response, body) {
                var results = JSON.parse(body).results;
                for(var el in results) {
                    console.log(el + " " + results[el]['title']);
                }
                prompt.start();
                prompt.get(['selection'], function(err, result) {
                    console.log(results[result.selection]);
                    request.get('https://openapi.etsy.com/v2/listings/' + results[result.selection]['listing_id'] + '/images?api_key=' + keys.ETSY_KEY, {}, function(error,response,body) {
                        console.log(JSON.parse(body).results);
                        utils.getImage(JSON.parse(body).results[1]['url_570xN']);
                    });
                });
            });
            break;
        case "category":
            console.log("etsy category : " + query);
            break;
        case "random":
            console.log("etsy random!");
            break;                      
        default:
            console.log("No matched command for etsy found.");
    }
}

//Functions:

exports.random = function() {

}