const mongoose = require('mongoose')

const USerSchema = new mongoose.Schema({
    USerFirstName:{
        type:String,
        required: true
    },
    USerLastName:{
        type:String,
        required: true
    },
    USerEmail:{
        type:String,
        required: true
    },
    USerPassword:{
        type:String,
        required: true
    },
    USerBirthDate:{
        type:Date,
        required: true
    },
})

const USer = mongoose.model('USer',USerSchema );
module.exports = USer;