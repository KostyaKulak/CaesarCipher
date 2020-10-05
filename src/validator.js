const {options, getOption} = require("./options");
const fs = require('fs');
const {errorHandler} = require("./error_handler");
const args = require('minimist')(process.argv.slice(2));

function validateArgs() {
    if (!getOption(args, options.ACTION)) {
        errorHandler(new Error('there is no the following required argument: --action'));
    }
    if (!getOption(args, options.SHIFT))
    {
        errorHandler(new Error('there is no the following required argument: --shift'));
    }
    let file = getOption(args, options.INPUT_FILE);
    if (file) {
        fs.access(file, fs.constants.R_OK, err => errorHandler(err));
    }
    file = getOption(args, options.OUTPUT_FILE);
    if (file) {
        fs.access(file, fs.constants.W_OK, err => errorHandler(err));
    }
}

module.exports = {
    validateArgs
};
