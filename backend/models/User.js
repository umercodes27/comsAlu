// File: backend/models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  ufirstName: String,
  lastName: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// Use default export
export default User;
