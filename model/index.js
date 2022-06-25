//用来把其他模块组织起来
const mongoose = require('mongoose')
const { dbUrl } = require("../config/config.default")

mongoose.connect(dbUrl)

//Organizational export model class
module.exports = {
    User: mongoose.model('User',require('./user')),
    Admin: mongoose.model('Admin',require('./admin')),
    Event: mongoose.model('Event',require('./event'))
};