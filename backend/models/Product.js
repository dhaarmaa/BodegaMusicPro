const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required: true
    },
    productCode:{
        type:String,
        required: true
    },
    productDescription:{
        type:String,
        required: true
    },
    productPrice:{
        type:Number,
        required: true
    },
    productStock:{
        type:Number,
        required: true
    }
})

const Product = mongoose.model('Product',ProductSchema );
module.exports = Product;