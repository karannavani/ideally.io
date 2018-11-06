const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema(
  {
    // Authentication Details
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },

    // Personal Details
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number }
  },
  { timestamps: true }
);

// METHODS

userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  next();
})

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model("User", userSchema);
