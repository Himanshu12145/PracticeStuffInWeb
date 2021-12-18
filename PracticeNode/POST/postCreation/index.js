const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override') 
const { v4: uuid } = require('uuid')


// Here we just try to use this encoded data from request bar or json file to get it exactly there
// Parsing middleware functions here
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


// Creating fake data using arrays
let comments = [
 {
  id:uuid(),
  username:'Micheal',
  comment:'you are good as fuck !!'
 },
 {
  id:uuid(),
  username:'Jhon',
  comment:'nice your post s '
 },
 {
  id:uuid(),
  username:'MArtin Luther',
  comment:'cool Right here your text is  !!'
 },
 {
  id:uuid(),
  username:'Masaachuttests',
  comment:'fuck all your fantasies for the real stuff here !!'
 },
 {
  id:uuid(),
  username:'JD Thompson',
  comment:'Rich dad rich son lomg dick  !!'
 },
 {
  id:uuid(),
  username:'Stephnie Jonson',
  comment:'You are so ugly as Hannah Fuck  !!'
 }
 
]
// Creating CRUD REST API 

// Read a comment
app.get('/comments',(req,res) => {
 res.render('comments/index',{comments})
})

// Create a comment
app.get('/comments/new',(req,res) => {
 res.render('comments/new')
})

app.post('/comments',(req,res) => {
 const {username , comment} =  req.body
 comments.push({username,comment,id:uuid()})
 res.redirect('/comments')

})

// creation of ID's 

app.get('/comments/:id',(req,res) => {
 const { id } = req.params
 const comment = comments.find( c => c.id === id )
 res.render('comments/show',{ comment })
 
})

// editing an existing comment
app.get('/comments/:id/edit', (req,res) => {
 const { id } = req.params
 const comment = comments.find( c => c.id === id )
 res.render('comments/edit', { comment })
 })

// comment update -- PATCH
app.patch('/comments/:id', (req,res) => {
 const { id } = req.params
 const newCommentText = req.body.comment
 const foundComment = comments.find( c => c.id === id )
 foundComment.comment = newCommentText
 res.redirect('/comments')
 
})

// Delete 
app.delete('/comments/:id',(req,res) => { 
 const { id } = req.params
 // const foundComment = comments.find( c => c.id === id )
 comments = comments.filter( c => c.id !== id )
 res.redirect('/comments')

})







app.get('/tacos', (req,res) => {
 res.send('GET/tacos response')
})

app.post('/tacos',(req,res) => {
 const {meat , qty} = req.body
 res.send(`Okay so you want ${meat} so finally it costs $ ${qty} for your tacos`)
})




app.listen(3000, () => { console.log('Listening to port 3000') })