const mongoose = require('mongoose');
const Schema = mongoose.Schema;//文章和作者关联起来，用mongoose的populate

const EventSchema = new mongoose.Schema({
    title : { 
        type: String,
        require : true, 
    },
    description : {
        type: String,
        require : true
    },
    start_Date : {
        type: Date,
        require : true
    },
    end_Date : {
        type: Date,
        require : true
    },
    categoryList: {
        type: [String],
        default: null,
    },
    is_International : {
        type: Boolean,
        default : null
    },
    is_Job_Event : {
        type: Boolean,
        default : null
    }, 
    is_Very_Important : {
        type: Boolean,
        default : null
    }, 
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
},
{ timestamps: true })

/* //USe { timestamps: true } Mongoose will add two properties of type Date to your schema:
createdAt: a date representing when this document was created
updatedAt: a date representing when this document was last updated */

module.exports = EventSchema