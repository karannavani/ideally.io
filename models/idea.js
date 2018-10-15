const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;


const ideaSchema = new mongoose.Schema(
  {
    // createdBy: { type: ObjectId, ref: "User" },
    createdBy: String,
    title: String,
    subtitle: String,
    description: String,
    date: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model('Idea', ideaSchema);
