const mongoose = require("mongoose");
const moment = require("moment");


// MODELS
const Idea = require('../models/idea');

// MONGOOSE CONNECTION
const { dbUri } = require("../config/environment");
mongoose.Promise = require("bluebird");
mongoose.connect(dbUri);

const ideaData = [
  {
    postedBy: "Karan",
    lookingFor: ['Developers', 'Marketers'],
    title: "Find like-minded students to work on business ideas",
    description: "Find like-minded students to work on business ideas and rmnomwpokdeofrjklsmkssk;s",
    date: moment().unix()
  }
];

Idea.collection.drop();

Idea.create(ideaData)
    .then(ideas => {
        console.log(`Created ${ideas.length} new ideas`)
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
