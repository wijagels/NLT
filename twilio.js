var exports = module.exports = {};

exports.parseCommand = function(words) {
    var number = words[1];
    var message = words.slice(2, words.length).toString().replace(',', ' ')
    switch (words[0].toLowerCase()) {
        case "search":
            console.log("twilio send to: " + number + " | message: " + message);
            break                     
        default:
            console.log("No matched command for artsy found.");
    }
}

//Functions: