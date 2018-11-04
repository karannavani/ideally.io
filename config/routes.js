const express = require("express");
const Router = express.Router();

// CONTROLLERS

const ideaController = require('../controllers/ideaController');
const userController = require('../controllers/userController');

// ROUTES

Router.route('/ideas')
    .get(ideaController.index)
    .post(ideaController.create);

Router.route('/ideas/:id')
    .patch(ideaController.update)
    .delete(ideaController.delete);

module.exports = Router;