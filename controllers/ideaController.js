const Idea = require("../models/idea");

function ideasIndex(req, res, next) {
    Idea
    .find()
    .then(ideas => res.json(ideas))
    .catch(next);
}

function ideasCreate(req, res, next) {
    Idea
    .create(req.body)
    .then(idea => res.json(idea))
    .catch(next);
}

module.exports = {
    index: ideasIndex,
    create: ideasCreate
}