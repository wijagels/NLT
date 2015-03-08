#!/usr/bin/env node


var keys = require('./keys');
var cli = require('cli'), options = cli.parse();
var ImageToAscii = require('image-to-ascii');
var Download = require('download');
var etsyjs = require('etsy-js');
var client = etsyjs.client(keys.ETSY_KEY);

//Printing logo
var file = require('read-file');
logo = file.readFileSync(__dirname + '/txt/logo.txt');
cli.output("\n" + logo + "\n\n");

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