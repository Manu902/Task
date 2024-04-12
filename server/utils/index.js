const jwt = require('jsonwebtoken');

const generateToken = () => {
    const payload = {
        email: 'admin@codesfortomorrow.com',
        password: 'Admin123!@#'
    }
    const secretkey = 'task'

    const token = jwt.sign(payload, secretkey);
    return token;
}

module.exports = {
    generateToken,
}