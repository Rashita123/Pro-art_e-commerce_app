const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: { type: String, default: null, unique: true },
    email: { type: String, default: null, unique:true },
    password: { type: String },
})

module.exports = mongoose.model("User", usersSchema);