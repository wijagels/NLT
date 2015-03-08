#!/usr/bin/env node


var keys = require('./keys');
var cli = require('cli'), options = cli.parse();
var etsyjs = require('etsy-js');
var client = etsyjs.client(keys.ETSY_KEY);
var utils = require('./utils.js');
var command = require('./command.js');


//Printing logo
var file = require('read-file');
logo = file.readFileSync(__dirname + '/txt/logo.txt');
cli.output("\n" + logo + "\n\n");

cli.withInput(function(line, newline, eof) {
    command.parseCommand(line);
    //call in command.js parseCommand(line);
    // utils.getImage(line);
});
