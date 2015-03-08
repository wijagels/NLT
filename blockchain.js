var exports = module.exports = {};

exports.parseCommand = function(words) {
    var query = words.slice(1, words.length).toString().replace(',', ' ');
    switch (words[0].toLowerCase()) {
        case "search":
            console.log("blockchain : " + query);
            break 
        case "category":
            console.log("artsy category : " + query);
            break;
        case "random":
            console.log("artsy random!");
            break;                      
        default:
            console.log("No matched command for artsy found.");
    }
}

//Functions: