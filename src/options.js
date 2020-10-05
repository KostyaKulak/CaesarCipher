const options = {
    ACTION: ['a', 'action'],
    INPUT_FILE: ['i', 'input'],
    OUTPUT_FILE: ['o', 'output'],
    SHIFT: ['s', 'shift']
}

function getOption(args, options) {
    return args[options[0]] || args[options[1]];
}

module.exports = {options, getOption}
