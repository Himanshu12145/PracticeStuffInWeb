const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
 console.log('CONNECTION OPEN!!!')
})
.catch(e => {
 console.log('Oh no error occured')
 console.log(e)
})

const productSchema = new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 price:{
  type:Number
 }
})

const Product = mongoose.model('Product',productSchema)
const bike = new Product({name:'Mountain Bike',price:567})
bike.save()
.then(data => {
 console.log('Worked NICELY')
 console.log(data)
})
.catch(e => {
 console.log('Something Went Wrong sorry ')
 console.log(e)
})

