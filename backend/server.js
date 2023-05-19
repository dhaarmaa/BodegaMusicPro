const express = require('express');
const mongoose = require('mongoose');
const app = express()

const ProductModel = require('./models/Product');
const USerModel = require('./models/User')


app.use(express.json())

mongoose.connect('mongodb+srv://teetitans:1q2w3e@cluster0.ivd8quw.mongodb.net/MusicPRo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/', async(req, res)=>{
    const product = new ProductModel({
        productName:"viola",
        productCode:"123vio40pl",
        productDescription: "Viola Rondo calidad basica, ideal para aquellos personas que desean iniciarse en el instrumento",
        productPrice: 80000,
        productStock: 20
    })

    try{
        await product.save();
    }catch(err){
        console.log(err)
    }
})

app.listen(3001, ()=>{
    console.log('server corriendo correctamente')
})