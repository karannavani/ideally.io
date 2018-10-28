const express = require("express");
const Router = express.Router();

// CONTROLLERS

const ideaController = require('../controllers/ideaController');

// ROUTES

Router.route('/ideas')
    .get(ideaController.index)
    .post(ideaController.create);

module.exports = Router;
