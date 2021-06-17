const jwt = require('jsonwebtoken');
const users = require('../models/userModel');

module.exports = (request, response, next) => {
    const token = request.cookies.token;
    console.log('cookies', request.cookies);
    jwt.verify(token, '#secret', async (err, payload) => {
        if (err) {
            response.status(402).send({ message: 'some error occured' });
        }
        const { id } = payload;
        // const phone = payload.phone;
        console.log('payload',payload);
        const userData = await users.findOne({ id });
        request.userData = userData;
        console.log('userData', userData);
        next();
    })
}