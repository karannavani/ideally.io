const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;


const ideaSchema = new mongoose.Schema(
  {
    // postedBy: { type: ObjectId, ref: "User" },
    postedBy: String,
    date: Number,
    title: String,
    description: String,
    lookingFor: [String]
    // upvotes: [{ type: ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Idea', ideaSchema);
