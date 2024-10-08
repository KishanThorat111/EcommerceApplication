// User Model Definition
// This file defines the User model schema for MongoDB using Mongoose.
// It includes username, password, and role fields, and hashes the password before saving.

const mongoose = require("mongoose"); // Importing mongoose for MongoDB interaction
const bcrypt = require("bcrypt"); // Importing bcrypt for password hashing

// Defining the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true }, // Unique username, required field
  password: { type: String, required: true }, // Password, required field
  role: { type: String, default: "user" }, // Role of the user, defaults to 'user'
});

// Pre-save middleware to hash the password before saving the user document
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) { // Check if the password field is modified
    this.password = await bcrypt.hash(this.password, 10); // Hash the password with bcrypt
  }
  next(); // Proceed to save the document
});

// Creating the User model based on the user schema
const User = mongoose.model("User", userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;
