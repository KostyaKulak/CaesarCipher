const {errorHandler} = require("./error_handler");
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ENCRYPTION = 'encode';
const DECRYPTION = 'decode';

const convertSymbol = (symbol, shift) => {
    const lowerCaseOfSymbol = symbol.toLowerCase();
    const index = alphabet.indexOf(lowerCaseOfSymbol);
    if (index >= 0) {
        const isLowerCase = symbol === lowerCaseOfSymbol;
        let shiftedIndex = (index + shift) % alphabet.length;
        if (shiftedIndex < 0) {
            shiftedIndex += alphabet.length;
        }
        let image = alphabet[shiftedIndex];
        if (!isLowerCase) {
            image = image.toUpperCase();
        }
        return image;
    } else {
        return symbol;
    }
}

const caesarCypher = (text, shift, action = ENCRYPTION) => {
    switch (action) {
        case ENCRYPTION:
            break;
        case DECRYPTION:
            shift *= -1;
            break;
        default:
            errorHandler(new Error(`there is an unknown action: ${action}`));
            break;
    }
    return text.split('')
        .map(symbol => convertSymbol(symbol, shift))
        .join('');
};

module.exports = {caesarCypher};
