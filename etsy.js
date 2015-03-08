var exports = module.exports = {};
var etsyjs = require('etsy-js');
var client = etsyjs.client(keys.ETSY_KEY);

exports.parseCommand = function(words) {
    var query = words.slice(1, words.length).toString().replace(',', ' ');
    switch (words[0].toLowerCase()) {
        case "search":
            console.log("etsy search: " + query);
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