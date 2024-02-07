var mongoose = require('mongoose');

const categorySchema  =  mongoose.Schema({
    categoryId: {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description :{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('category',categorySchema);;