const User = require('../models/user');

function listMyRides(username) {
    return User.findOne({ username }).then(user => user.rides).catch(err => err);
}

function addToUser(username, rideId) {
    return User.findOneAndUpdate({username}, {$push: {rides: rideId}})
        .then(res => res)
        .catch(err => err);
}

module.exports = {
    addToUser,
    listMyRides,
}
