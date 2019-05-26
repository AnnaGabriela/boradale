require('dotenv').config();
require('./db/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = require('express')();
const { listRides, createRide, listRide, askForRide } = require("./db/controllers/ride");
const { listMyRides } = require("./db/controllers/user");
const PORT = process.env.PORT || 3030;
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/listRides', (req,res) => {
  const district = req.query.district;
  return listRides(district)
          .then(result => res.send(result))
          .catch(err => res.send(err));
});

app.get('/listMyRides', (req,res) => {
  const username = req.query.username;
  let rides = [];
  listMyRides(username)
    .then(ridesIds => {
      ridesIds.forEach(id => {
        listRide(id)
          .then(ride => {
            let len = rides.push(ride);
            if (len == ridesIds.length) res.send(rides);
          })
          .catch(err => err);
        });
      })
    .catch(err => res.send(err));
});

app.post('/createRide', (req,res) => {
  const username = req.body.username;
  const name = req.body.name;
  const start = req.body.start;
  const end = req.body.end;
  const schedule = req.body.schedule;
  const km = req.body.km;
  const district = req.body.district;
  createRide(username, start, end, schedule, km, name, district)
  .then(result => res.send(result))
  .catch(err => res.send(err));
});

app.post('/askForRide', (req,res) => {
  const username = req.body.username;
  const rideId = req.body.rideId;
  return askForRide(username, rideId)
    .then(res => res)
    .catch(err => err);
});

app.listen(PORT, () => { 
  console.log(`App Server listening on port ${PORT}.`);
});