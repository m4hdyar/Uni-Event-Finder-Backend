
const mongoose = require('mongoose')
const { dbUrl } = require("../config/config.default")

mongoose.connect(dbUrl)

//Organizational export model class
module.exports = {
    User: mongoose.model('User',require('./user')),
    Profile: mongoose.model('Profile',require('./profile')),
    Event: mongoose.model('Event',require('./event'))
};