const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (id) => {
        const token = jwt.sign({id}, '#secret', { expiresIn: '1d' })
        return token;
    }
}