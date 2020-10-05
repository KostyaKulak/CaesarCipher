const fs = require('fs');
const {errorHandler} = require("./error_handler");
const {pipeline} = require('stream');
const {coder} = require('./coder.js');

function transformData(inputFile, outputFile) {
    let source = inputFile ? fs.createReadStream(inputFile) : process.stdin;
    let target = outputFile ? fs.createWriteStream(outputFile, {flags: 'a'}) : process.stdout;
    pipeline(source, coder, target, err => errorHandler(err));
}

module.exports = {transformData};
