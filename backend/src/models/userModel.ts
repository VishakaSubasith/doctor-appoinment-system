var mongoose = require('mongoose');

const userSchema  =  mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email :{
        type: String,
        required:true
    },
    address :{
        type: String,
        required:true
    },
    contactno :{
        type: Number,
        required:true
    },
    gender :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    },
});

module.exports = mongoose.model('User',userSchema);;