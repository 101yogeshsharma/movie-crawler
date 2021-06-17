const express = require('express');
const routeController = require('../controllers/routeController');
const path = require('path');

const router = express.Router();

router.get('/', (request, response) => {    response.sendFile('../client/build') });
router.post('/login', (request, response) => routeController.login(request, response));
router.post('/newUser', (request, response) => routeController.signup(request, response));
router.get("/getUsers", (request, response) => routeController.getUsers(request, response));
router.post("/getUserData", (request,response) => routeController.getUserData(request, response));
router.post("/getMovies", (request, response) => routeController.searchMovies(request, response));
router.post("/listMovies", (request, response) => routeController.listMovies(request, response));

module.exports = router;