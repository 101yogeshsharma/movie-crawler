const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

    Title: {
        type: 'String',
        required: true
    },

    imdbID: {
        type: 'String',
        required: true,
        unique: true
    },

    Year: {
        type: 'String',
        required: true
    },

    Type: {
        type: 'String',
    },

    Poster: {
        type: 'String',
        required: true
    }
})

module.exports = mongoose.model('movies', movieSchema);