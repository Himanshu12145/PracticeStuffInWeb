const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
 console.log('Started')
})
.catch(e => {
 console.log('Errrrrrrrr!!!')
 console.log(e)
})

const movieSchema = new mongoose.Schema({
 title: String,
 year:Number,
 score:Number,
 rating:String
})

const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({
//  title:'Amadeus',
//  year:1934,
//  score:9.8,
//  rating:'R'
// })

// Movie.insertMany([
//  {
//  title:'Amadeus',
//  year:1934,
//  score:9.8,
//  rating:'R'
// },
//  {
//  title:'Alien',
//  year:1924,
//  score:8.9,
//  rating:'PG'
// },
//  {
//  title:'Iron-Man',
//  year:1934,
//  score:2.3,
//  rating:'R'
// },
//  {
//  title:'Elon Musk',
//  year:2003,
//  score:8.2,
//  rating:'R'
// },
//  {
//  title:'Moonrise Kingdom',
//  year:2010,
//  score:3.8,
//  rating:'R'
// },
//  {
//  title:'Captain Marvel',
//  year:2000,
//  score:9.90,
//  rating:'PG-13'
// }
// ])
// .then(data => {
//  console.log('IT Worked!!!')
//  console.log(data)
// })
