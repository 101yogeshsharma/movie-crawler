const movies = require('../models/movieModal');

module.exports = {
    SEARCH_BY_ID: async (imdbID) => {
        let movieList = await movies.findOne({ imdbID });
        return movieList
    },

    SEARCH_BY_NAME: async (Title) => {
        let movieList = await movies.find({ Title })
        return movieList
    },

    STORE_MOVIE: async (request, response) => {
        const movie = {
            Title: request.Movie.Title,
            imdbID: request.Movie.imdbID,
            Year: request.Movie.Year,
            Poster: request.Movie.Poster
        }
        console.log('movie', movies);
        const newMovie = new movies(movie);
        await newMovie.save();
        response.status(200).send({ movieList: request.Movie });
    },

    STORE_MOVIES: async (request, response) => {
        let movieList = request.MovieList.Search
        movies.insertMany(movieList)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
        response.status(200).send({ movieList });

    },

    LIST_MOVIES: async (page) => {
        let movieList = await movies.find().skip((page - 1)* 10).limit(10)
        return movieList
    }

}