const axios = require('axios');
const localDB = require('../services/localDB_services');

module.exports = {
    SEARCH_BY_ID :  async (request, response) => {
        const imdbID = request.body.id;
            await axios.post(`http://www.omdbapi.com/?i=${imdbID}&apikey=93467ab7`)
            .then(res => {
                if(res.status === 200) {
                    request.Movie = res.data;
                    console.log('found movies in remote', request.Movie)
                    localDB.STORE_MOVIE(request,response);
                }
            })
    },

    SEARCH_BY_NAME : async (request, response) => {
        const keyword = request.body.keyword;
        await axios.post(`http://www.omdbapi.com/?s=${keyword}&apikey=93467ab7`)
            .then(res => {
                if(res.status === 200) {
                    request.MovieList = res.data;
                    localDB.STORE_MOVIES(request,response);
                }
            })
    }
}