#!/usr/bin/env node

var cli = require('cli');
var ImageToAscii = require('image-to-ascii');
var Download = require('download');


cli.withInput(function(line, newline, eof) {
    getImage(line);
});

var getImage = function(url) {
    var download = new Download({extract: true, strip: 1, mode: '755'})
        .get(url)
        .dest(__dirname + "/tmp")
        .rename("tmp");
    download.run(function(err, files) {
        if(err)
            throw err;
        console.log(files);
        ImageToAscii(__dirname + "/" + "tmp/tmp", function(err, converted) {
            cli.output(err || converted);
        });
    });
}