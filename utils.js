var exports = module.exports = {};

var ImageToAscii = require('image-to-ascii');
var Download = require('download');
var gif = require('gif-explode')
var fs = require('fs')

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
    var url = cmd.toString().split(' ');
    exports.getImage(cmd.toString());
}

exports.gif = function(url) {

  var download = new Download({extract: true, strip: 1, mode: '755'})
  .get(url)
  .dest(__dirname + "/tmp")
  .rename("tmp");
  download.run(function(err, files) {
      if(err)
          throw err;
      fs.createReadStream(__dirname + '/tmp/tmp')
        .pipe(gif(function(frame) {
          frame.pipe(fs.createWriteStream(
            'frame.gif'
          ))
          ImageToAscii(__dirname + "/" + "frame.gif" , function(err, converted, i) {
              console.log(err || converted);
          });
        }))
      
  });
}