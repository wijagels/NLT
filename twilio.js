var exports = module.exports = {};
var client = require('twilio')(keys.TWILIOSID, keys.TWILIOTOKEN); 

exports.parseCommand = function(words) {
    var number = words[1];
    var message = words.slice(2, words.length).toString().replace(',', ' ');
    switch (words[0].toLowerCase()) {
        case "send":
            this.sendMessage(number, message);
            break;
        default:
            console.log("Ahh!  I don't understand");
    }
}

//Functions:

exports.sendMessage = function(number, message) {
    client.messages.create({
        to: number,
        from: "+14242752250",
        body: message,
    }, function(err, message) {
        if(err)
            throw(err);
        else
            console.log("Sent message!");
    });
}