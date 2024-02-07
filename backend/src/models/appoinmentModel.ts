var mongoose = require('mongoose');

const appoinmentSchema  =  mongoose.Schema({
    appoinmentId: {
        type : String,
        required : true
    },
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
    categoryId :{
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