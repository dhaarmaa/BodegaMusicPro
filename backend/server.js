const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()

const ProductModel = require('./models/Product');
const UserModel = require('./models/User')


app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://teetitans:1q2w3e@cluster0.ivd8quw.mongodb.net/MusicPRo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.post('/agregar', async(req, res)=>{

    const productName = req.body.productName
    const productCode = req.body.productCode
    const productDescription = req.body.productDescription
    const productPrice = req.body.productPrice
    const productStock = req.body.productStock

    const product = new ProductModel({
        productName: productName,
        productCode: productCode,
        productDescription: productDescription,
        productPrice: productPrice,
        productStock: productStock
    });

    try{
        await product.save();
    }catch(err){
        console.log(err)
    }
});

app.get('/leer', async(req, res)=>{
    ProductModel.find({}, (err, result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    });
    
});


app.listen(3001, ()=>{
    console.log('server corriendo correctamente')
})