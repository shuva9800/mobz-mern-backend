// utils/validators.js

// Check if a string contains only alphabets (letters)
function isValidAlpha(value) {
    const alphaPattern = /^[A-Za-z]+$/;
    return alphaPattern.test(value);
}

module.exports = isValidAlpha;
