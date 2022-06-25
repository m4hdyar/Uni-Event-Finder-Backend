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
        //再加一条，这样返回的信息中就不包含password了
        select: false,        
    },
    email : {
        type: String,
        require : true
    },
    //用户的个人介绍
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
},
{ timestamps: true })



/* const User = mongoose.model('User', UserSchema)

//User.db.dropCollection('users')

module.exports = { User } */

module.exports = UserSchema


