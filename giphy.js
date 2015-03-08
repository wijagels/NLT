var exports = module.exports = {};

exports.parseCommand = function(words){
    switch (words[0].toLowerCase()) {
    case "search":
    	var query = words[1, words.length].replace(',', ' + ');
        console.log("giphy search: " + query);
        break;
    default:
    	console.log("no matched command for giphy found.")
}
