const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;


const ideaSchema = new mongoose.Schema(
  {
    // createdBy: { type: ObjectId, ref: "User" },
    createdBy: String,
    date: Number,
    thumbnail: String,
    videoUrl: String,
    title: String,
    subtitle: String,
    description: String,
    lookingFor: [String]
    // upvotes: [{ type: ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Idea', ideaSchema);
