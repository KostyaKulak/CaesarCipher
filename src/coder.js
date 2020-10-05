const {caesarCypher} = require('./caesar_cypher.js');
const {options, getOption} = require("./options");
const args = require('minimist')(process.argv.slice(2));
const stream = require('stream');
const coder = new stream.Transform({objectMode: true});


coder._transform = function (chunk, encoding, done) {
    try {
        done(
            null,
            caesarCypher(chunk.toString(), getOption(args, options.SHIFT), getOption(args, options.ACTION))
        );
    } catch (e) {
        done(e);
    }
};

module.exports = {coder};
