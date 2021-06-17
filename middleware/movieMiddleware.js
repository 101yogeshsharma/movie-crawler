const users = require('../models/userModel');
const axios = require('axios');

module.exports = {
    searchMovies: async (request, response) => {
        console.log('fetching movies');
        if(request.body.id) {
            const keyword =request.body.id;
            console.log('id', keyword)
            await axios.post(`http://www.omdbapi.com/?i=${keyword}&apikey=93467ab7`)
            .then(res => {
                if(res.status === 200) {
                    response.status(200).send({movie: res.data});
                }
            })
        } else {
            const keyword = request.body.keyword;
            console.log('keyword', keyword)
            await axios.post(`http://www.omdbapi.com/?s=${keyword}&apikey=93467ab7`)
            .then(res => {
                if(res.status === 200) {
                    response.status(200).send({movies: res.data});
                }
            })
        } 
        response.status(404).send({message: 'not movies found'})
    }
}