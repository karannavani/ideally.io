const Idea = require("../models/idea");

function ideasIndex(req, res, next) {
    Idea
    .find()
    .then(ideas => res.json(ideas))
    .catch(next);
}

module.exports = {
    index: ideasIndex
}