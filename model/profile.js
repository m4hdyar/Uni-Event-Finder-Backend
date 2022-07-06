const mongoose = require('mongoose');
const Schema = mongoose.Schema;//Associate the profile with the user

const ProfileSchema = new mongoose.Schema({
    user : { 
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true},
    username : {
        type: String,
        default : null
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
},
{ timestamps: true })


module.exports = ProfileSchema


