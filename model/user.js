const mongoose = require('mongoose');
const md5 = require("../util/md5");

const UserSchema = new mongoose.Schema({
    username : { 
        type: String,
        require : true},
    password : {
        type: String,
        require : true,
        set: value => md5(value),
        //The returned message does not contain the password
        select: false,        
    },
    email : {
        type: String,
        require : true
    },
    is_International : {
        type: Boolean,
        default : null
    },
    need_Job : {
        type: Boolean,
        default : null
    },
    program : {
        type: String,
        default : null
    },
    major : {
        type: String,
        default : null
    },
    interest_List: {
        type: [String],
        default: null,
    },
    is_Admin : {
        type: String,
        default : "0"
    },//1-> admin; 0-> normal user
},
{ timestamps: true })


module.exports = UserSchema


