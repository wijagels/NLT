var exports = module.exports = {};
var utils = require('./utils.js');
var giphy = require('./giphy.js');
var artsy = require('./artsy.js');
var etsy = require('./etsy.js');
var blockchain = require('./blockchain.js');
var twilio = require('./twilio.js');
var file = require('read-file');

exports.parseCommand = function(line){
	var words = line.split(" ");
    var query = words.slice(1, words.length);

    switch (words[0].toLowerCase()) {
        case "help":
            help = file.readFileSync(__dirname + '/txt/help.txt');
            console.log("\n" + help + "\n");
            break;
        case "giphy":
            giphy.parseCommand(query);
            break;
        case "artsy":
            artsy.parseCommand(query);
            break;
        case "etsy":
            etsy.parseCommand(query);
            break;
        case "blockchain":
            blockchain.parseCommand(query);
            break;
        case "orderx":
            //do thing
            break;
        case "twilio":
            twilio.parseCommand(query);
            break;
        case "convert":
            utils.toAscii(query);
            break;
        case "fedora":
            utils.getImage("http://i.ytimg.com/vi/82yHd99YxnY/maxresdefault.jpg");
            break;
        case "gif":
            utils.gif("http://media.giphy.com/media/Pij3hAnY2TNn2/giphy.gif");
        default:
    	   console.log("Didn't understand your command! Try typing help.");
    }
}
