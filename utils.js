var exports = module.exports = {};

var ImageToAscii = require('image-to-ascii');
var Download = require('download');

exports.getImage = function(url) {
    var download = new Download({extract: true, strip: 1, mode: '755'})
        .get(url)
        .dest(__dirname + "/tmp")
        .rename("tmp");
    download.run(function(err, files) {
        if(err)
            throw err;
        ImageToAscii(__dirname + "/" + "tmp/tmp", function(err, converted) {
            console.log(err || converted);
        });
    });
}

exports.toAscii = function(cmd) {
    var url = cmd.split(' ');
    exports.getImage(url[2]);
}