const mongoose = require('mongoose');


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
    category: {
        type: String,
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
    cost: {
        type: Number,
        default : null
    },
},
{ timestamps: true })

/* //USe { timestamps: true } Mongoose will add two properties of type Date to your schema:
createdAt: a date representing when this document was created
updatedAt: a date representing when this document was last updated */

module.exports = EventSchema