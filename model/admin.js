const mongoose = require('mongoose');
const md5 = require("../util/md5");

const AdminSchema = new mongoose.Schema({
    username : { 
        type: String,
        require : true},
    password : {
        type: String,
        require : true,
        set: value => md5(value),
        //so that the returned message does not contain the password
        select: false,        
    },
    email : {
        type: String,
        require : true
    },
},
{ timestamps: true })


module.exports = AdminSchema


