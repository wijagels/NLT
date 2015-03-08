#!/usr/bin/env node

var cli = require('cli');
var ImageToAscii = require('image-to-ascii');
var Download = require('download');
//var etsyjs = require('etsy-js');
//var client = etsyjs.client(keys.ETSY_KEY);

//Printing logo
var file = require('read-file');
logo = file.readFileSync(__dirname + '/txt/logo.txt');
cli.output("\n" + logo + "\n\n");

cli.withInput(function(line, newline, eof) {
    //call in command.js parseCommand(line);
});

