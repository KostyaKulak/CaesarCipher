const {transformData} = require('./src/data_transform.js');
const {validateArgs} = require('./src/validator.js');
const {options, getOption} = require("./src/options");
const args = require('minimist')(process.argv.slice(2));

validateArgs();
transformData(getOption(args, options.INPUT_FILE), getOption(args, options.OUTPUT_FILE));
