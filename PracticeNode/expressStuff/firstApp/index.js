const express = require('express')
const app = express()

// app.use((req,res) =>{
//  console.log('We are doning something here as you all could see this ')
//  // console.dir(req)
//  // res.send('HEllo , We got it')
//  res.send({
//   color:'red-green',
//   gender:'male/female'
//  })
// })


// app.get works from top t5o bottoom approach just like the some of the other stuff that we see here onn
app.get('/',(req,res) => {
 console.log('Home Page   IS RESPONDING!!!')
 res.send('Responding now dont worry hereon....')
})
app.get('/cats',(req,res) => {
 console.log('CAT IS RESPONDING!!!')
 res.send('Responding now dont worry hereon....')
})
app.get('/dogs',(req,res) => {
 console.log('DOG IS RESPONDING!!!')
 res.send('Responding now dont worry hereon....')
})


// For bydefault values that we want to be handled like localhost:3000/fdsgfsdg '*' represent all here

app.get('*',(req,res) =>{
 console.log('Default one working here ')
 res.send('The request you made is not working by now retry something else..')
})

// console.dir(app)
app.listen(3000,() =>{
 console.log('Listening on Port 3000!!!')
})  