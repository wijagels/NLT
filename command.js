var exports = module.exports = {};
var giphy = require('./giphy.js');
var utils = require('./utils.js');

exports.parseCommand = function(line){
	var words = line.split(" ");

    switch (words[0].toLowerCase()) {
        case "help":
        //do thing
        break;
        case "giphy":
        giphy.parseCommand(words.slice(1, words.length));        
        break;
        case "artsy":
        //do thing
        break;
        case "etsy":
        //do thing
        break;
        case "blockchain":
        //do thing
        break;
        case "orderx":
        //do thing
        break;
        case "convert":
            utils.toAscii(query);
            break;
        default:
    	//do thing
    }


}
