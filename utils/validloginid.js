// utils/loginIdValidator.js
function isValidLoginId(loginId) {
    const loginIdPattern = /^[a-zA-Z0-9]{8}$/;
    return loginIdPattern.test(loginId);
}

module.exports = isValidLoginId;
