const users = require('../models/userModel');
const authController = require('./authController');
const remoteDB = require('../services/remoteDB_services');
const localDB = require('../services/localDB_services');

module.exports = {
    login: async (request, response) => {
        console.log(request.body);
        let email = request.body.email;
        let password = request.body.password;

        await users.findOne({ email })
            .then(async (data) => {
                if (data.password === password) {
                    const token = authController.generateToken(data._id);
                    response
                        .cookie('token', token, { maxAge: 8640000, httpOnly: true })
                        .status(200)
                        .send({ message: 'success' })

                } else {
                    response
                        .status(401)
                        .send({ message: 'Invalid Credentials' })
                }
            })
            .catch(err => response.status(401).send({ message: 'Invalid Credentials' }));
    },

    signup: async (request, response) => {
        const email = request.body.email;
        console.log(request.body);
        const user = await users.findOne({ email })
        if (user) {
            response
                .status(409)
                .send({ message: 'Account Already Exist with this Email' })

        } else {
            const newUser = new users(request.body);
            await newUser.save();
            console.log(newUser);
            const token = authController.generateToken(data._id);
            response
                .cookie('token', token, { maxAge: 8640000, httpOnly: true })
                .status(200)
                .send({ message: 'success' })
        }
    },

    getUsers: async (request, response) => {

        let userList = await users.find();

        if (userList) {

            response.status(200).send({ userList })
        } else {
            response.status(404).send({ message: 'No users Found' })
        }
    },

    getUserData: async (request, response) => {

        response
            .status(200)
            .send(request.userData)
    },

    // will fetch movies from  omdb
    searchMovies: async (request, response) => {

        if (request.body.id) {
            localDB.SEARCH_BY_ID(request.body.id)
                .then(async (movieList) => {
                    if (movieList !== null) {
                        response.status(200).send({ movieList })
                    } else {
                        remoteDB.SEARCH_BY_ID(request, response);
                    }
                })
        }

        else {
            localDB.SEARCH_BY_NAME(request.body.keyword)
                .then(movieList => {
                    if (movieList.length > 0) {
                        response.status(200).send({ movieList })
                    } else {
                        remoteDB.SEARCH_BY_NAME(request, response);
                    }
                })
        }
    },

    listMovies: async (request, response) => {
        localDB.LIST_MOVIES(request.body.page)
            .then(movieList => {
                if(movieList) {
                    response.status(200).send({ movieList })
                }
            })
            .catch(err => {
                response.send(404).send({ message: 'not found'})
            })
    }
}