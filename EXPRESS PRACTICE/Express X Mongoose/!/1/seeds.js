

const mongoose = require('mongoose');
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('Connection Started to mongoDB')})
.catch(e => { console.log('Oh no Error', e) })

// const p = new Product({
//  name:'Ruby Grapefruit',
//  price:1.99,
//  category:'fruit'
// })

// p.save()
// .then(p =>{
//  console.log(p)
// })
// .catch(e =>{
//  console.log(e)
// })

const seedProducts = [
 {
  name : 'Fairy Eggplant',
  price:1.00,
  category:'vegetable'
 },
 {
  name : 'Organic Goddess Melon',
  price:4.00,
  category:'fruit'
 },
 {
  name : 'Seedless Watermelon',
  price:3.30,
  category:'fruit'
 },
 {
  name : 'Pure Chocolate Milk',
  price:7.00,
  category:'dairy'
 },
 {
  name : 'Hot Ginger',
  price:0.63,
  category:'vegetable'
 },
 {
  name : 'Berry Berry strawberry',
  price:6.60,
  category:'fruit'
 },
 {
  name : 'NA NA Banana',
  price:4.89,
  category:'fruit'
 },
 {
  name : 'DOC Apple',
  price:3.76,
  category:'fruit'
 },
 {
  name : 'Curd',
  price:2.90,
  category:'dairy'
 }
]

Product.insertMany(seedProducts)
.then(res => {
 console.log(res)
})
.catch(e => {
 console.log(e)
})
