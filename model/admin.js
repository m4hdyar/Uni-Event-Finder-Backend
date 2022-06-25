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
        //再加一条，这样返回的信息中就不包含password了
        select: false,        
    },
    email : {
        type: String,
        require : true
    },
},
{ timestamps: true })



/* const Admin = mongoose.model('Admin', AdminSchema)

//Admin.db.dropCollection('Admins')

module.exports = { Admin } */

module.exports = AdminSchema


