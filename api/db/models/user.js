const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    rides: [ { type: String } ],
    rating: { type: Number, required: true },
});

module.exports = mongoose.model('users', userSchema);
