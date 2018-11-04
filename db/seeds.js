const mongoose = require("mongoose");
const moment = require("moment");

// MODELS
const Idea = require("../models/idea");
const User = require("../models/user");

// MONGOOSE CONNECTION
const { dbUri } = require("../config/environment");
mongoose.Promise = require("bluebird");
mongoose.connect(dbUri);

const userIds = [
  "5bdf403ff7be4f598ba07e41",
  "5bdf403ff7be4f598ba07e42",
  "5bdf403ff7be4f598ba07e43",
  "5bdf403ff7be4f598ba07e44",
  "5bdf403ff7be4f598ba07e45"
];

const ideaData = [
  {
    postedBy: userIds[0],
    date: moment().unix(),
    title: "Idea sharing platform",
    description: "Find like-minded students to work on business ideas",
    lookingFor: ["Developers", "Marketers"]
  },
  {
    postedBy: userIds[1],
    date: moment().unix(),
    title: "Weight carrying drones",
    description: "Drones that carry your luggage for you",
    lookingFor: ["Drone experts"]
  }
];

const userData = [
  {
    _id: userIds[0],
    username: "karannavani",
    email: "kknavani@gmail.com",
    pass: "pass",
    firstName: "Karan",
    lastName: "Navani",
    age: "20"
  }, 
  {
    _id: userIds[1],
    username: "prateekawasthi",
    email: "prateek@gmail.com",
    pass: "pass",
    firstName: "Prateek",
    lastName: "Awasthi",
    age: "21"
  }
];

Idea.collection.drop();
User.collection.drop();

User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} new users`)
    return Idea.create(ideaData);
  })
  .then(ideas => {
    console.log(`Created ${ideas.length} new ideas`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
