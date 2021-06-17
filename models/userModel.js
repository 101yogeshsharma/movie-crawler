const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    name: {
        type: 'String',
        required: true
    },

    email: {
        type: 'String',
        required: true,
        unique: [true, 'Email is already exist']
    },

    dob: {
        type: 'Date',
        required : true
    },

    password: {
        type: 'String',
        required: true
    }
})

module.exports = mongoose.model('users', userSchema);