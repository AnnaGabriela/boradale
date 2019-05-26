const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    admin_username: { type: String, required: true },
    name: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    schedule: { type: Date, required: true },
    requests: [ { type: String } ],
    riders: [ { type: String } ],
    district: { type: String, required: true },
    km: { type: Number, required: true },
});

module.exports = mongoose.model('rides', rideSchema);
