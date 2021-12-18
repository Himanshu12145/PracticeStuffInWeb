const express  = require('express')
const app = express()
const path = require('path')
const Product = require('./models/product')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('Connection Started to mongoDB')})
.catch(e => { console.log('Oh no Error', e) })





app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.get('/products', async (req,res) =>{
 const products = await Product.find({})
 res.render('products/index',{products})
})


app.get('/products/:id', async (req,res) =>{
 const {id}  = req.params
 const product = await Product.findById(id)
 res.render('products/show',{product})
})

app.listen(3000, () => {
 console.log('Hey it just worked now !!!')
})