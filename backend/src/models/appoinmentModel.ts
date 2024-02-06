var mongoose = require('mongoose');

const appoinmentSchema  =  mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    name :{
        type: String,
        required:true
    },
    description :{
        type: String,
        required:false
    },
    category :{
        type: String,
        required:true
    },
    dateAndTime :{
        type: String,
        required:true
    },
    doctorId: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Appoinment',appoinmentSchema);;