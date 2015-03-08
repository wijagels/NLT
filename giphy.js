var exports = module.exports = {};

exports.parseCommand = function(words) {
    switch (words[0].toLowerCase()) {
        case "search":
            var query = words.slice(1, words.length).toString().replace(',', ' + ');
            console.log("giphy search: " + query);
            break;
        default:
            console.log("no matched command for giphy found.");
    }
}