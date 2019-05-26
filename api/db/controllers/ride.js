const Ride = require('../models/ride');
const { addToUser } = require('./user');

function listRides(district) {
    return Ride.find({ district }).then(rides => rides).catch(err => err);
}

function listRide(id) {
    return Ride.findById(id).then(ride => ride).catch(err => err);
}

function createRide(admin_username, start, end, schedule, km, name, district) {
    const ride = new Ride({
        admin_username,
        name,
        start,
        end,
        schedule,
        requests: [],
        riders: [],
        district,
        km,
    });
    return ride.save()
        .then(res => addToUser(admin_username, res.id))
        .catch(err => err);
}

function askForRide(username, ride_id) {
    return Ride.findOneAndUpdate({ '_id': ride_id }, {$push: {requests: username}})
                .then(res => res)
                .catch(err => err);
}

module.exports = { 
    listRide,
    listRides,
    createRide,
    askForRide
}
