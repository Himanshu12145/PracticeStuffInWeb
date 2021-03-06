const express = require('express')
const app = express()
const path  = require('path')
const redditData  = require('./data.json')

app.use(express.static(path.join(__dirname,'public')))

// console.log(redditData)

app.set('view engine', 'ejs')
app.set(__dirname,'/views')


app.get('/',(req,res) => {
 res.render('home')
})

app.get('/cats',(req,res) =>{
 const cats = [
  'Blue', 'Rocket','Monty', 'Stephnie' ,'WhiteStone'
 ]
 res.render('cats',{ cats })
})

app.get('/r/:subreddit',(req,res) =>{
 const {subreddit} = req.params;
 const data = redditData[subreddit]
 // console.log(data)
 if (data) {
 res.render('subreddit',{ ...data})
 } else{
  res.render('notfound',{subreddit})
 }

 res.render('subreddit',{ ...data})
})

app.get('/rand',(req,res) => {
  const num = Math.floor(Math.random() *10 )+ 1
 res.render('random',{num})
})

// This is the basic default one here 
app.get('*',(req,res) => {
 res.send('Please Check out the service one again for your betterment sir...')
})

app.listen(3000,() => {
 console.log('Listening localhost:3000')
})