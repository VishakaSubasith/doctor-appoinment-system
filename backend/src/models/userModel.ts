var mongoose = require('mongoose');

const userSchema  =  mongoose.Schema({
    userId: {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email :{
        type: String,
        required:true,
        unique: true
    },
    address :{
        type: String,
        required:true
    },
    contactno :{
        type: Number,
        required:true,
        unique: true
    },
    gender :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    },
    userType: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('User',userSchema);;