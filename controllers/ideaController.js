const Idea = require("../models/idea");

function ideasIndex(req, res, next) {
    Idea
    .find()
    .populate('postedBy')
    .then(ideas => res.json(ideas))
    .catch(next);
}

function ideasCreate(req, res, next) {
    Idea
    .create(req.body)
    .then(idea => res.json(idea))
    .catch(next);
}

function ideasDelete(req, res, next) {
    Idea.findById(req.params.id)
        .then(idea => idea.remove())
        .then(() => res.sendStatus(204))
        .catch(next);
}

function ideasUpdate(req, res, next) {
    Idea.findById(req.params.id)
    .then(idea => idea.set(req.body))
    .then(idea => idea.save())
    .then(idea => res.json(idea))
    .catch(next)
}

module.exports = {
    index: ideasIndex,
    create: ideasCreate,
    delete: ideasDelete,
    update: ideasUpdate
}