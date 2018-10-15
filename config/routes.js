const express = require("express");
const Router = express.Router();

// CONTROLLERS

const ideaController = require('../controllers/ideaController');

// ROUTES

Router.route('/ideas')
    .get(ideaController.index);

module.exports = Router;
