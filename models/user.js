const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Authentication Details
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },

    // Personal Details
    firstName: { type: String },
    surname: { type: String },
    age: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
