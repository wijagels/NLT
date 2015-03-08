var exports = module.exports = {};
var giphy = require('./giphy.js');
var etsy = require('./etsy.js');
var file = require('read-file');

exports.parseCommand = function(line){
	var words = line.split(" ");
    var query = words.slice(1, words.length);

    switch (words[0].toLowerCase()) {
        case "help":
            help = file.readFileSync(__dirname + '/txt/help.txt');
            cli.output("\n" + help + "\n");
            break;
        case "giphy":
            giphy.parseCommand(query);        
            break;
        case "artsy":
            //do thing
            break;
        case "etsy":
            etsy.parseCommand(query);
            break;
        case "blockchain":
            //do thing
            break;
        case "orderx":
            //do thing
            break;
        default:
    	//do thing
    }


}
